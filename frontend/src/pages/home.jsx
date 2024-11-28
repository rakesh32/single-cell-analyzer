import { ChevronRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './home/_components/card';

const Home = () => {
  const routes = [
    {
      name: 'Start a New Analysis',
      href: '/analysis',
    },
    // {
    //   name: 'Applications',
    //   href: '/applications',
    // },
    // {
    //   name: 'New to single cell',
    //   href: '/new',
    // },
  ];
  return (
    <div>
      <div className="bg-white w-full -mt-[19em] min-h-screen px-[20em]">
        {/* Jump to section */}
        <div className="py-6 flex justify-between">
          {/* Jump to */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-medium">Jump To:</span>
            <div className="text-slate-800 font-medium flex items-center gap-4">
              {routes.map((route, index) => (
                <Link to={route.href} key={index}>
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Documentation Button */}
          <button className="border-slate-400 flex items-center gap-2 border-[1px] px-4 py-2 rounded-md hover:bg-blue-200/50 text-blue-600 font-medium">
            Go to Technical Documentation
            <ChevronRightIcon width={18} height={18} strokeWidth={3} />
          </button>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="grid grid-cols-3 mt-[4em]">
            <div className="col-span-1">
              <img src="/images/chromium-cells.svg" alt="" />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="grid grid-cols-2">
                <div className="-ml-[7em] max-h-[6em]">
                  <span className="text-black text-3xl font-bold">
                    Single cell analysis enables meaningful discoveries
                  </span>
                </div>
                <div className="flex flex-col gap-6 -ml-[4em]">
                  {/* contents */}
                  <div className="flex flex-col gap-4">
                    <span>
                      Bulk sequencing averages readouts, missing critical
                      details driving complex biology.
                    </span>
                    <span>
                      Single cell sequencing allows scientists to see the unique
                      gene expression patterns of each cell. This view more
                      fully characterizes tissue heterogeneity, revealing the
                      rare cell types that have big consequences in health and
                      disease.
                    </span>
                  </div>
                  <div>
                    <Link
                      to={'/'}
                      className="text-blue-600 flex items-center gap-2 font-medium"
                    >
                      <span>
                        Get to know the method changing how we see biology
                      </span>
                      <ChevronRightIcon
                        height={18}
                        width={18}
                        strokeWidth={3}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-12 -ml-[7em]" />
            </div>
          </div>
        </div>
        <div className="my-8 flex flex-col gap-[2em]">
          <span className="text-black text-4xl font-bold">
            Innovations developed for your success at every step
          </span>
          <div className="flex gap-8">
            <Card
              title={'Access more sample types'}
              desc={
                'Profile fresh, frozen, or fixed samples—even FFPE—with optimized protocols for proven performance'
              }
              imgUrl={'/images/card1icon.webp'}
            />
            <Card
              title={'Automate critical steps to reduce error'}
              desc={
                'Produce up to 2.56M barcoded partitions in just minutes, with up to 80% cell recovery'
              }
              videoUrl={'/videos/chromium-desktop.mp4'}
            />
            <Card
              title={'Construct high-quality sequence-ready libraries'}
              desc={
                'Generate libraries with up to 95% usable reads, letting you detect more genes at lower sequencing costs'
              }
              imgUrl={'/images/card2icon.webp'}
            />
            <Card
              title={'Analyze & discover with ease'}
              desc={
                'Process and visualize your data with powerful software tools—no bioinformatics experiences required'
              }
              imgUrl={'/images/card3icon.webp'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
