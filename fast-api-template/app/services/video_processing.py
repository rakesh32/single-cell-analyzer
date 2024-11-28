import os
import cv2

def video_to_images(video_path,output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    video_capture = cv2.VideoCapture(video_path)

    if not video_capture.isOpened():
        print("Error: could not open video")
        return

    frame_count = 0
    while True:
        ret,frame = video_capture.read()

        if not ret:
            break;

        frame_filename = os.path.join(output_folder,f"frame_{frame_count:04d}.jpg")
        cv2.imwrite(frame_filename,frame)

        frame_count += 1

    video_capture.release()

    print(f"Extracted {frame_count} frames to {output_folder}")