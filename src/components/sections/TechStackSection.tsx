"use client";
import { Tooltip } from "@nextui-org/react";
import DomainIconsBox from "@/components/DomainIconsBox";
import {
  IconBrandKotlin,
  IconDjango,
  IconGolang,
  IconGooglecloud,
  IconJava,
  IconKubernetes,
  IconLogoDocker,
  IconLogoFirebase,
  IconMicrosoftazure,
  IconNextjs,
  IconPython,
  IconPytorch,
  IconReact,
  IconScikitlearn,
  IconTailwind,
  IconTensorflow,
  IconTypescript,
} from "@/components/icons/Icons";

const tooltipClasses = {
  content:
    "bg-gray-800 text-gray-100 text-xs font-medium px-2.5 py-1 rounded-lg shadow-lg border border-gray-700",
};

export default function TechStackSection() {
  return (
    <section className="flex flex-col items-center justify-center space-y-6 py-14">
      <h2 className="text-2xl font-bold">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <DomainIconsBox name="Languages">
          <Tooltip showArrow classNames={tooltipClasses} content="Go"><IconGolang className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="TypeScript & JS"><IconTypescript className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Python"><IconPython className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Java"><IconJava className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Kotlin"><IconBrandKotlin className="h-6 w-6" /></Tooltip>
        </DomainIconsBox>
        <DomainIconsBox name="Frameworks">
          <Tooltip showArrow classNames={tooltipClasses} content="React Native"><IconReact className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Next.js & ReactJS"><IconNextjs className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Tailwind CSS"><IconTailwind className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Django"><IconDjango className="h-6 w-6" /></Tooltip>
        </DomainIconsBox>
        <DomainIconsBox name="Cloud Infra">
          <Tooltip showArrow classNames={tooltipClasses} content="Microsoft Azure"><IconMicrosoftazure className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Google Cloud"><IconGooglecloud className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Firebase"><IconLogoFirebase className="h-6 w-6" /></Tooltip>
        </DomainIconsBox>
        <DomainIconsBox name="Containers">
          <Tooltip showArrow classNames={tooltipClasses} content="Docker"><IconLogoDocker className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Kubernetes"><IconKubernetes className="h-6 w-6" /></Tooltip>
        </DomainIconsBox>
        <DomainIconsBox name="Machine Learning">
          <Tooltip showArrow classNames={tooltipClasses} content="TensorFlow"><IconTensorflow className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="PyTorch"><IconPytorch className="h-6 w-6" /></Tooltip>
          <Tooltip showArrow classNames={tooltipClasses} content="Scikit-learn"><IconScikitlearn className="h-6 w-6" /></Tooltip>
        </DomainIconsBox>
      </div>
    </section>
  );
}
