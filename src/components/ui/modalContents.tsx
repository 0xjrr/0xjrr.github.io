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
      <Card className="border-0 shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">
            {!!project ? project.title : ""}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {!!project && project?.readme && (
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {project.readme}
            </p>
          )}
          {!!project && project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-200 transition"
            >
              Download APK
            </a>
          )}
          {(!!project?.videos || !!project?.images) && (
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4">
              {project?.videos?.map((video, index) => (
                <div key={index} className="flex w-full items-center justify-center">
                  <video
                    className="w-full rounded-lg border object-contain"
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
              {project?.images?.map((image, index) => (
                <div key={index} className="flex w-full items-center justify-center">
                  <img
                    alt="Screenshot"
                    className="w-full rounded-lg border object-contain"
                    src={image}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
