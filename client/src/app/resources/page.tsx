import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel/Carousel'
import Footer from '@/components/footer/Footer'

const Resources = () => {
  return (
    <div>
      {/* Financial */}
      <div className="pt-25">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20 [0.5fr_0.5fr] text-white">
          <div>
            <Image
              width={500}
              height={200}
              src={'/static/backgrounds/uoa-background.jpg'}
              alt={''}
              className="h-48 object-cover"
            />
          </div>
          <div>
            <h1 className="text-center font-mono font-bold text-4xl">
              Financial Resources
            </h1>
            <p>
              If you're stressed about money, you're not alone — find the
              financial assistance you need through emergency funding,
              allowances, job searching, and more.
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-4 px-4 text-white">
          <Carousel>
            <div className="mb-4 flex justify-end space-x-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
              <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
            </div>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
                <Link href="#" className="">
                  <Image
                    width={500}
                    height={200}
                    src={'/static/backgrounds/uoa-background.jpg'}
                    alt={''}
                    className="h-48 w-full object-cover"
                  />
                  <h2 className="text-lg font-bold text-center">StudyLink</h2>
                  <p>
                    StudyLink helps New Zealand students fund their studies
                    through student loans, allowances, and financial support.
                    Find out if you're eligible and how to apply for tuition and
                    living cost assistance.
                  </p>
                </Link>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
                <Image
                  width={500}
                  height={200}
                  src={'/static/backgrounds/uoa-background.jpg'}
                  alt={''}
                  className="h-48 w-full object-cover"
                />
                <h2 className="text-lg font-bold text-center">
                  Student Emergency Fund
                </h2>
                <p>
                  The Student Emergency Fund offers short-term financial
                  assistance to enrolled students whose studies are being
                  affected by unforeseen and uncontrollable financial
                  difficulties. Support is available for essential living costs
                  such as groceries, private rent, and utility bills, if
                  applicable.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
                <Image
                  width={500}
                  height={200}
                  src={'/static/backgrounds/uoa-background.jpg'}
                  alt={''}
                  className="h-48 w-full object-cover"
                />
                <h2 className="text-lg font-bold text-center">
                  Student Job Search
                </h2>
                <p>
                  Student Job Search connects students with a wide range of
                  employment opportunities, from part-time and casual work to
                  graduate roles. Whether you're after flexible hours or
                  long-term experience, thousands of student-friendly jobs are
                  just a click away.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
                <Image
                  width={500}
                  height={200}
                  src={'/static/backgrounds/uoa-background.jpg'}
                  alt={''}
                  className="h-48 w-full object-cover"
                />
                <h2 className="text-lg font-bold text-center">
                  Student Job Search
                </h2>
                <p>
                  Student Job Search connects students with a wide range of
                  employment opportunities, from part-time and casual work to
                  graduate roles. Whether you're after flexible hours or
                  long-term experience, thousands of student-friendly jobs are
                  just a click away.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
                <Image
                  width={500}
                  height={200}
                  src={'/static/backgrounds/uoa-background.jpg'}
                  alt={''}
                  className="h-48 w-full object-cover"
                />
                <h2 className="text-lg font-bold text-center">
                  Student Job Search
                </h2>
                <p>
                  Student Job Search connects students with a wide range of
                  employment opportunities, from part-time and casual work to
                  graduate roles. Whether you're after flexible hours or
                  long-term experience, thousands of student-friendly jobs are
                  just a click away.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
                <Image
                  width={500}
                  height={200}
                  src={'/static/backgrounds/uoa-background.jpg'}
                  alt={''}
                  className="h-48 w-full object-cover"
                />
                <h2 className="text-lg font-bold text-center">
                  Student Job Search
                </h2>
                <p>
                  Student Job Search connects students with a wide range of
                  employment opportunities, from part-time and casual work to
                  graduate roles. Whether you're after flexible hours or
                  long-term experience, thousands of student-friendly jobs are
                  just a click away.
                </p>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Acadmeic */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20 [0.5fr_0.5fr] text-white">
          <div>
            <Image
              width={500}
              height={200}
              src={'/static/backgrounds/uoa-background.jpg'}
              alt={''}
              className="h-48 object-cover"
            />
          </div>
          <div>
            <h1 className="text-center font-mono font-bold text-4xl">
              Academic Resources
            </h1>
            <p>
              Academic challenges can feel overwhelming — these resources are
              here to help advise you through tough situations and conflicts
              related to your studies.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-4 px-4 text-white">
        <Carousel>
          <div className="mb-4 flex justify-end space-x-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
            <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
          </div>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                Aegrotat and Compassionate Consideration
              </h2>
              <p>
                Available to students whose short-term personal circumstances
                have significantly impacted their test or exam performance. You
                must apply within seven days of the affected assessment, with
                supporting documentation to explain the impact on your
                preparation or performance.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                UoA Learning Support
              </h2>
              <p>
                UoA Learning Support provides resources and guidance to help
                students strengthen their academic skills, including research,
                writing, and effective study strategies. Access workshops,
                one-on-one support, and online tools designed to help you
                succeed throughout your studies.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                UoA Academic Misconduct
              </h2>
              <p>
                The University of Auckland manages breaches of academic
                integrity through the Academic Quality Office and faculty
                Academic Integrity Advisers. Breaches range from Poor Academic
                Practice to Minor and Major Academic Misconduct, ensuring fair
                and consistent handling.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                UoA Academic Misconduct
              </h2>
              <p>
                The University of Auckland manages breaches of academic
                integrity through the Academic Quality Office and faculty
                Academic Integrity Advisers. Breaches range from Poor Academic
                Practice to Minor and Major Academic Misconduct, ensuring fair
                and consistent handling.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                UoA Academic Misconduct
              </h2>
              <p>
                The University of Auckland manages breaches of academic
                integrity through the Academic Quality Office and faculty
                Academic Integrity Advisers. Breaches range from Poor Academic
                Practice to Minor and Major Academic Misconduct, ensuring fair
                and consistent handling.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                UoA Academic Misconduct
              </h2>
              <p>
                The University of Auckland manages breaches of academic
                integrity through the Academic Quality Office and faculty
                Academic Integrity Advisers. Breaches range from Poor Academic
                Practice to Minor and Major Academic Misconduct, ensuring fair
                and consistent handling.
              </p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Mental Wellbeing */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20 [0.5fr_0.5fr] text-white">
          <div>
            <Image
              width={500}
              height={200}
              src={'/static/backgrounds/uoa-background.jpg'}
              alt={''}
              className="h-48 object-cover"
            />
          </div>
          <div>
            <h1 className="text-center font-mono font-bold text-4xl">
              Wellbeing Resources
            </h1>
            <p>
              Your health matters. Whether you're in crisis or just need someone
              to talk to, help is here and ready to support you. Resources and
              services are available to anyone and everyone at least once a
              semester.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-4 px-4 text-white">
        <Carousel>
          <div className="mb-4 flex justify-end space-x-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
            <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
          </div>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">UoA Campus Care</h2>
              <p>
                The University of Auckland manages breaches of academic
                integrity through the Academic Quality Office and faculty
                Academic Integrity Advisers. Breaches range from Poor Academic
                Practice to Minor and Major Academic Misconduct, ensuring fair
                and consistent handling.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                UoA Counselling Services
              </h2>
              <p>
                Offers short-term, confidential support every semester to help
                students manage personal challenges that may affect their
                studies. Support includes in-person and online counselling,
                culturally affirming services for Māori and Pacific students,
                and access to Puāwaitanga.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">UoA Be Well</h2>
              <p>
                Supported by the University of Auckland for mental health and
                wellbeing, encouraging open conversations about life’s
                challenges—big or small. Explore articles, tools, and support
                services designed to help you feel heard, supported, and
                empowered to take care of your wellbeing.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">UoA's CALM</h2>
              <p>
                A wellbeing resource focused on building mental resilience and
                emotional wellbeing. Explore evidence-based tools to manage
                stress, anxiety, and depression, develop healthy relationships,
                and discover lasting meaning and happiness in everyday life.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">UoA Be Well</h2>
              <p>
                Supported by the University of Auckland for mental health and
                wellbeing, encouraging open conversations about life’s
                challenges—big or small. Explore articles, tools, and support
                services designed to help you feel heard, supported, and
                empowered to take care of your wellbeing.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">UoA Be Well</h2>
              <p>
                Supported by the University of Auckland for mental health and
                wellbeing, encouraging open conversations about life’s
                challenges—big or small. Explore articles, tools, and support
                services designed to help you feel heard, supported, and
                empowered to take care of your wellbeing.
              </p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative z-10 mt-4 px-4 text-white">
        <Carousel>
          <div className="mb-4 flex justify-end space-x-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
            <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
          </div>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                The Mental Health Crisis Service
              </h2>
              <p>
                A 24/7 public health support for individuals experiencing a
                mental health crisis or concerned about someone else's safety.
                Call or visit the Mental Health Foundation website to connect
                with your local crisis team for immediate, confidential
                assistance.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">
                Lifeline Aotearoa
              </h2>
              <p>
                Provides free, confidential support via phone and text for
                anyone experiencing emotional distress or crisis. Call 0800
                LIFELINE or text HELP (4357) to speak with trained counsellors
                offering support for mental health, relationships, grief,
                loneliness, and suicide prevention.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">Youthline</h2>
              <p>
                A national support service for young people aged 12–24, offering
                free, confidential help through text, phone, webchat, and email.
                From mental health support to mentoring and personal development
                programmes, Youthline empowers young people across Aotearoa.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">Youthline</h2>
              <p>
                A national support service for young people aged 12–24, offering
                free, confidential help through text, phone, webchat, and email.
                From mental health support to mentoring and personal development
                programmes, Youthline empowers young people across Aotearoa.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">Youthline</h2>
              <p>
                A national support service for young people aged 12–24, offering
                free, confidential help through text, phone, webchat, and email.
                From mental health support to mentoring and personal development
                programmes, Youthline empowers young people across Aotearoa.
              </p>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:scale-105">
              <Image
                width={500}
                height={200}
                src={'/static/backgrounds/uoa-background.jpg'}
                alt={''}
                className="h-48 w-full object-cover"
              />
              <h2 className="text-lg font-bold text-center">Youthline</h2>
              <p>
                A national support service for young people aged 12–24, offering
                free, confidential help through text, phone, webchat, and email.
                From mental health support to mentoring and personal development
                programmes, Youthline empowers young people across Aotearoa.
              </p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* <footer className="relative z-20 mt-auto">
        <Footer />
      </footer> */}
    </div>
  )
}

export default Resources
