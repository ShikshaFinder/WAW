/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j1w3MM3uDyr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="size-6" />
          <span className="sr-only">Women at Work</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Speakers
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="./womenimg.jpeg"
                  width="400"
                  height="400"
                  alt="Happy Women"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Women is our mission !
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Women at Work is an event organizing company dedicated to
                    organise events for your special day.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Organise an event with us !
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Upcoming Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Inspiring Events for Women
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for our upcoming events and enjoy life fully !
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/08/50/17/50/1000_F_850175039_tb3tCMSHxrpj1W8ZJq4ID9tjLWH7ew8N.jpg"
                  width="550"
                  height="310"
                  alt="Event"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <h3 className="text-lg font-bold">
                  Women in Leadership Summit
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explore strategies for advancing your career and overcoming
                  challenges.
                </p>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    June 15, 2023
                  </span>
                </div>
              </div>
              <div className="grid gap-1">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="550"
                  height="310"
                  alt="Event"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <h3 className="text-lg font-bold">
                  We are expert in organising marrige
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn practical tips for managing your time and
                  responsibilities.
                </p>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    July 20, 2023
                  </span>
                </div>
              </div>
              <div className="grid gap-1">
                <img
                  src="https://images.pexels.com/photos/1345352/pexels-photo-1345352.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width="550"
                  height="310"
                  alt="Event"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <h3 className="text-lg font-bold">Janeu</h3>
                <p className="text-sm text-muted-foreground">
                  We are expert in organizing in janeu.
                </p>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    August 10, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Speakers
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Inspiring Women Leaders
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from our lineup of accomplished women who will share
                  their insights and experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <Avatar>
                  <AvatarImage src="./dishadidi.png" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Disha Solanki</h3>
                <p className="text-sm text-muted-foreground">
                  CEO,Women At Work
                </p>
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    15+ years experience
                  </span>
                </div>
              </div>
              <div className="grid gap-1">
                <Avatar>
                  <AvatarImage src="./dishadidi.png" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Disha Solanki</h3>
                <p className="text-sm text-muted-foreground">
                  Founder, Women At Work
                </p>
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    10+ years experience
                  </span>
                </div>
              </div>
              <div className="grid gap-1">
                <Avatar>
                  <AvatarImage src="Women At Work" />
                  <AvatarFallback>KW</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Disha Solanki</h3>
                <p className="text-sm text-muted-foreground">CTO, Tech Co</p>
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    8+ years experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Attendees Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from women who have attended our events and how they have
                  benefited.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <blockquote className="p-4 rounded-lg bg-background shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>HJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Harsh Jani
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CEO,Shiksha Finder
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    They have orgnaised events in very effective and cost
                    friendly manner.
                  </p>
                </blockquote>
              </div>
              <div className="grid gap-1">
                <blockquote className="p-4 rounded-lg bg-background shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>HJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Niranshu Mittal
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Founder ,Agulous
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    "These events have been a game-changer for me. The practical
                    advice and supportive community have helped me advance my
                    career in ways I never thought possible."
                  </p>
                </blockquote>
              </div>
              <div className="grid gap-1">
                <blockquote className="p-4 rounded-lg bg-background shadow-sm">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Sarah Kim
                      </p>
                      <p className="text-sm text-muted-foreground">
                        HR Specialist
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    "I've attended several Women at Work events, and each one\n
                    has left me feeling inspired and empowered. The speakers\n
                    and attendees are so supportive and encouraging."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Women at Work. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
