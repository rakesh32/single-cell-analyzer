import cv2
import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from typing import List
import os
import cv2
import numpy as np
from pydantic import BaseModel

app = FastAPI()

# TrafficDensity class for processing
class TrafficDensity:
    def __init__(self):
        pass

    def trafficType(self):
        return [self.LABELS[i] for i in self.classIDs]

    def trafficDensity(self, image_path, image_name):
        args = {
            "image": image_path,
            "yolo": "yolo-coco",
            "confidence": float(0.5),
            "threshold": float(0.3)
        }
        
        current_dir = os.getcwd()

        labelsPath = os.path.join(current_dir,args["yolo"], "coco.names")
        self.LABELS = open(labelsPath).read().strip().split("\n")

        np.random.seed(42)
        COLORS = np.random.randint(0, 255, size=(len(self.LABELS), 3), dtype="uint8")

        weightsPath = os.path.sep.join([args["yolo"], "yolov3.weights"])
        configPath = os.path.sep.join([args["yolo"], "yolov3.cfg"])

        net = cv2.dnn.readNetFromDarknet(configPath, weightsPath)
        image = cv2.imread(args["image"])
        (H, W) = image.shape[:2]

        ln = net.getLayerNames()
        ln = [ln[i - 1] for i in net.getUnconnectedOutLayers()]

        blob = cv2.dnn.blobFromImage(image, 1 / 255.0, (416, 416), swapRB=True, crop=False)
        net.setInput(blob)
        layerOutputs = net.forward(ln)

        boxes = []
        confidences = []
        self.classIDs = []

        for output in layerOutputs:
            for detection in output:
                scores = detection[5:]
                classID = np.argmax(scores)
                confidence = scores[classID]
                if classID == 0:
                    continue
                if confidence > args["confidence"]:
                    box = detection[0:4] * np.array([W, H, W, H])
                    (centerX, centerY, width, height) = box.astype("int")
                    x = int(centerX - (width / 2))
                    y = int(centerY - (height / 2))

                    boxes.append([x, y, int(width), int(height)])
                    confidences.append(float(confidence))
                    self.classIDs.append(classID)

        idxs = cv2.dnn.NMSBoxes(boxes, confidences, args["confidence"], args["threshold"])

        if len(idxs) > 0:
            for i in idxs.flatten():
                (x, y) = (boxes[i][0], boxes[i][1])
                (w, h) = (boxes[i][2], boxes[i][3])

                color = [int(c) for c in COLORS[self.classIDs[i]]]
                cv2.rectangle(image, (x, y), (x + w, y + h), color, 2)
                text = "{}: {:.4f}".format(self.LABELS[self.classIDs[i]], confidences[i])
                cv2.putText(image, text, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        os.makedirs(os.path.join(current_dir,'output'),exist_ok=True)
        output_path = os.path.join(current_dir,"output", f"{image_name}.png")
        
        cv2.imwrite(output_path, image)
        return len(idxs), output_path



