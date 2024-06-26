import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card";
import Project from "@/interfaces/project";

type ModalContentsProps = {
  project: Project | null;
  className?: string;
};

export const ModalContents: React.FC<ModalContentsProps> = ({
  project,
  className,
}) => {
  return (
    <div className={className}>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl">
            {!!project ? project.title : ""}
          </CardTitle>
          <CardContent className="pt-2 pb-2">
            <p className="text-sm leading-none text-gray-500">
              {!!project && project?.readme && <span>{project.readme}</span>}
            </p>
          </CardContent>
          {!!project && project.download && (
            <div className="flex items-center justify-start space-x-2 px-4">
              <a
                href={project.download}
                target="_blank"
                className="cursor-pointer flex items-center justify-start p-2"
              >
                <div className="flex items-center hover:bg-gray-150 dark:hover:bg-gray-500 hover:shadow-lg bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden max-w-lg">
                  <div className="p-2">
                    <p className="text-sm md:text-lg font-bold text-gray-500 dark:text-gray-300">
                      Download
                    </p>
                  </div>
                </div>
              </a>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full grid-cols-2 items-stretch gap-6">
            <div className="flex w-full items-center justify-start space-x-4">
              <SmartphoneIcon className="w-6 h-6" />
              <span>Android</span>
            </div>
            <div className="flex w-full items-center justify-start space-x-4">
              <AppleIcon className="w-6 h-6" />
              <span>iOS</span>
            </div>
            <div className="flex w-full items-center justify-start space-x-4">
              <LaptopIcon className="w-6 h-6" />
              <span>Linux</span>
            </div>
            <div className="flex w-full items-center justify-start space-x-4">
              <ContainerIcon className="w-6 h-6" />
              <span>Docker</span>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 items-stretch gap-6">
            {!!project &&
              !!project?.videos &&
              project.videos.map((video, index) => (
                <div
                  key={index}
                  className="mx-auto flex w-full items-center justify-center p-4 sm:p-8"
                >
                  <video
                    className="aspect-video overflow-hidden rounded-lg object-contain object-center border"
                    height="225"
                    width="400"
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            {!!project &&
              !!project?.images &&
              project.images.map((image, index) => (
                <div
                  key={index}
                  className="mx-auto flex w-full items-center justify-center p-4 sm:p-8"
                >
                  <img
                    alt="Screenshot"
                    className="aspect-video overflow-hidden rounded-lg object-contain object-center border"
                    height="225"
                    src={image}
                    width="400"
                  />
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function LaptopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function ContainerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  );
}
