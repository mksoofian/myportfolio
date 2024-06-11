"use client";
import Image from "next/image";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  tabsArray,
  projects,
  relatedExperience,
  allBadges,
} from "@/lib/projectData";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="sm:mt-10 mt-2 flex flex-col">
      <section className="flex justify-evenly flex-wrap gap-8 my-10" id="About">
        {/* About Me */}

        <div className="lg:max-w-96 px-8 sm:px-4">
          <div className="relative ">
            <div className="rounded-full bg-zinc-900  animate-wiggle w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] absolute mix-blend-difference  ">
              {" "}
            </div>
            <h1 className="text-6xl sm:text-8xl mix-blend-darken">
              react developer
            </h1>
          </div>
        </div>
        {/* Badges */}
        <div className="flex flex-wrap gap-4 mt-4 p-8">
          {allBadges.map((badge) => {
            return (
              <Badge
                key={badge}
                className={`animate-slideAndFadeIn  ${badgeVariants({
                  variant: "secondary",
                })}`}
              >
                {badge}
              </Badge>
            );
          })}
        </div>
        {/* Tabs Card */}
        {/* <div>
          <Tabs defaultValue="technologies" className="w-80 sm:w-[400px]">
            <TabsList className="w-full">
              <>
                {tabsArray.map(({ title, subtitle, description, badges }) => {
                  return (
                    <TabsTrigger key={title} value={title.toLowerCase()}>
                      {title}
                    </TabsTrigger>
                  );
                })}
              </>
            </TabsList>
            <>
              {tabsArray.map(({ title, subtitle, description, badges }) => {
                return (
                  <TabsContent key={title} value={title.toLowerCase()}>
                    <Card className="h-[275px]">
                      <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>
                          {subtitle ? subtitle : description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        {subtitle && description}
                        <>
                          {badges.map((badge) => {
                            return (
                              <Badge
                                key={badge}
                                className={badgeVariants({
                                  variant: "secondary",
                                })}
                              >
                                {badge}
                              </Badge>
                            );
                          })}
                        </>
                      </CardContent>
                      <CardFooter></CardFooter>
                    </Card>
                  </TabsContent>
                );
              })}
            </>
          </Tabs>
        </div> */}
      </section>
      <section id="Projects" className="my-8">
        {/* Projects */}
        <Label
          htmlFor="projectList"
          className="font-syne font-bold text-2xl pl-4 "
        >
          Projects
        </Label>
        <div id="projectList" className="mt-2 flex flex-col md:flex-row gap-4 ">
          <>
            {projects.map(
              ({ name, description, image, url, github, badges }) => {
                return (
                  <Card
                    key={name}
                    className=" w-full md:w-1/3 p-4 flex flex-col justify-between hover:border-zinc-300 hover:bg-slate-50 "
                  >
                    <Link href={url} className="w-full ">
                      <Image
                        src={image}
                        alt={description}
                        width={2880}
                        height={1552}
                        className=" border-zinc-100 border-solid border-2"
                      />
                    </Link>
                    <CardHeader>
                      <CardTitle>{name}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                      <CardContent className="flex flex-wrap gap-2 p-0">
                        <>
                          {badges.map((badge) => {
                            return (
                              <Badge
                                key={badge}
                                className={"text-zinc-600"}
                                variant={"outline"}
                              >
                                {badge}
                              </Badge>
                            );
                          })}
                        </>
                      </CardContent>
                    </CardHeader>

                    <CardFooter className="flex gap-2">
                      <Button size="sm">
                        <Link href={url}>Website</Link>
                      </Button>{" "}
                      <Button size="sm">
                        <Link href={github}>Github</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              }
            )}
          </>
        </div>
      </section>
      <section id="Resume" className="my-10 bg-zinc-50">
        {/* Resume / CV */}
        {/* remove this outer div? */}
        <div className="mt-8">
          <Label
            htmlFor="relatedExperience"
            className="font-syne font-bold text-2xl pl-4 "
          >
            Work Experience
          </Label>
          <div id="relatedExperience">
            {relatedExperience.map(
              ({
                role,
                companyName,
                companyDescription,
                dates,
                bulletPoints,
                websiteUrl,
                projectUrl,
              }) => {
                return (
                  <div key={`${role}-${dates}`} className="my-4 px-6 sm:py-2">
                    {/* Header */}
                    <div className="py-2">
                      <div id="row1" className="flex justify-between my-2">
                        <div className="flex flex-wrap ">
                          <h3 className="font-semibold pr-1">{role},</h3>
                          <p>{companyName}</p>
                        </div>
                        <p id="dates">{dates}</p>
                      </div>
                      <div id="row2" className="italic text-sm text-zinc-500">
                        {companyDescription}
                      </div>
                    </div>
                    {/* Details */}
                    <ul id="bulletPoints" className="list-disc pl-4">
                      <>
                        {bulletPoints.map((bullet, index) => {
                          return (
                            <li key={bulletPoints[index]} className="my-2">
                              {bullet}
                            </li>
                          );
                        })}
                      </>
                    </ul>
                    {/* Relevant Website Link/ Buttons */}
                    {websiteUrl && (
                      <div key={companyName} className="mt-4  flex gap-2">
                        <Button variant={"outline"}>
                          <Link href={websiteUrl}>Website</Link>
                        </Button>
                        {projectUrl && (
                          <Button variant={"outline"}>
                            <Link href={projectUrl}>Project</Link>
                          </Button>
                        )}
                      </div>
                    )}
                    <Separator className="mt-8" />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="italic font-light text-sm py-6 bg-white my-10 text-center">
          Prior experience includes 12 years in the apparel production industry.
        </div>
      </section>

      {/* <footer id="Contact"></footer> */}
    </main>
  );
}
