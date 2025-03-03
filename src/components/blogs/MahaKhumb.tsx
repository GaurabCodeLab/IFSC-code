import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MahaKhumb = () => {
  return (
    <div className="container mx-auto md:px-4 py-0 -mt-6 max-w-4xl">
      <div className="text-sm w-full mb-5">
        Aerial view of Maha Kumbh Mela - The world's largest religious gathering
      </div>
      <div className="bg-muted p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-2">Quick Navigation</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <li>
            <a href="#introduction" className="text-primary hover:underline">
              Introduction to Maha Kumbh
            </a>
          </li>
          <li>
            <a href="#dates" className="text-primary hover:underline">
              Maha Kumbh 2025 Dates
            </a>
          </li>
          <li>
            <a href="#significance" className="text-primary hover:underline">
              Religious Significance
            </a>
          </li>
          <li>
            <a
              href="#financial-planning"
              className="text-primary hover:underline"
            >
              Financial Planning for Pilgrims
            </a>
          </li>
          <li>
            <a
              href="#banking-services"
              className="text-primary hover:underline"
            >
              Banking Services at Kumbh
            </a>
          </li>
          <li>
            <a href="#faqs" className="text-primary hover:underline">
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </div>

      <section id="introduction">
        <h2 className="text-2xl font-bold mb-4">
          Introduction to Maha Kumbh Mela
        </h2>
        <p>
          The Maha Kumbh Mela is one of the most significant religious
          gatherings in the world, attracting millions of devotees from across
          India and world. This grand pilgrimage represents the epitome of Hindu
          faith and tradition, occurring once every 12 years at four sacred
          river locations in India named Prayagraj, Haridwar, Ujjain, and
          Nashik. However, the Maha Kumbh, which happens once every 144 years at
          Prayagraj (formerly Allahabad), holds special significance and is
          considered the most auspicious of all Kumbh celebrations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1740946578/PTI01-14-2025-RPT095A-0_1736845547273_1736845579267_bgvejt.avif"
              alt="Devotees taking holy dip in Sangam at Maha Kumbh Mela"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1740946474/naga-sadhus-02-1734676060_prkkpa.jpg"
              alt="Sadhus gathering at Maha Kumbh Mela 2025"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p>
          The 2025 Maha Kumbh Mela at Prayagraj is expected to be one of the
          largest gatherings of humanity, with an estimated 660 million pilgrims
          attending over the course of the event. This massive influx of people
          creates unique challenges and opportunities, particularly in terms of
          financial management and banking services.
        </p>
      </section>

      <section id="dates" className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Maha Kumbh Mela 2025: Dates and Schedule
        </h2>
        <p>
          The Maha Kumbh Mela 2025 will be held at Prayagraj (Allahabad), Uttar
          Pradesh, at the sacred confluence of three rivers: the Ganga, Yamuna,
          and the mythical Saraswati. This confluence, known as Triveni Sangam,
          is considered one of the holiest spots in Hinduism.
        </p>

        <div className="bg-primary/10 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-3">
            Key Dates for Maha Kumbh Mela 2025:
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Main Festival Period:</strong> January 13, 2025 - February
              26, 2025 (approximate dates)
            </li>
            <li>
              <strong>Makar Sankranti:</strong> January 14, 2025 - First major
              bathing day
            </li>
            <li>
              <strong>Mauni Amavasya:</strong> January 29, 2025 - Most
              auspicious bathing day
            </li>
            <li>
              <strong>Basant Panchami:</strong> February 3, 2025
            </li>
            <li>
              <strong>Maghi Purnima:</strong> February 12, 2025
            </li>
            <li>
              <strong>Maha Shivratri:</strong> February 26, 2025 - Concluding
              bathing day
            </li>
          </ul>
          <p className="text-sm mt-4 text-muted-foreground">
            Note: These dates are based on the Hindu calendar and astronomical
            calculations. Minor adjustments may occur.
          </p>
        </div>
      </section>

      <section id="significance" className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Religious and Cultural Significance
        </h2>
        <p>
          According to Hindu mythology, the Kumbh Mela commemorates the time
          when drops of amrit (the elixir of immortality) fell at four locations
          during a battle between the devas (gods) and asuras (demons). The Maha
          Kumbh at Prayagraj is especially significant as it is believed that
          the largest amount of amrit fell at this location.
        </p>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden my-6">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1740947564/1736759064337_What_is_the_Maha_Kumbh_Mela_A_Complete_Guide_to_the_Festival_Significance_drctqc.png"
            alt="Religious ceremonies during Maha Kumbh Mela"
            fill
            className="object-cover"
          />
        </div>

        <p>
          The Maha Kumbh that occurs every 144 years is determined by a specific
          planetary alignment when Jupiter enters Aries and the Sun and Moon are
          in Capricorn. This rare astronomical event is believed to amplify the
          spiritual energy at the Triveni Sangam, making it an exceptionally
          powerful time for pilgrims to take a holy dip and wash away their
          sins.
        </p>
      </section>

      <section id="economic-impact" className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Economic Impact of Maha Kumbh Mela on India and Uttar Pradesh
        </h2>
        <p>
          The Maha Kumbh Mela is not just a spiritual gathering; it's also a
          significant economic event that brings substantial benefits to both
          India and the state of Uttar Pradesh. The massive influx of pilgrims
          and tourists creates a surge in various sectors of the economy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Direct Economic Benefits
            </h3>
            <ul className="space-y-2">
              <li>Increased tourism revenue</li>
              <li>Boost to local businesses and vendors</li>
              <li>Employment generation</li>
              <li>Infrastructure development</li>
              <li>Growth in hospitality and transportation sectors</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Indirect Economic Benefits
            </h3>
            <ul className="space-y-2">
              <li>Promotion of cultural tourism</li>
              <li>Increased foreign exchange earnings</li>
              <li>Boost to handicraft and souvenir industries</li>
              <li>Long-term infrastructure improvements</li>
              <li>Enhanced global visibility for investment</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
          <h3 className="text-xl font-semibold mb-3">Economic Impact Data</h3>
          <p className="mb-4">Some data insights of maha khumb mela 2025</p>
          <ul className="space-y-3">
            <li>
              <strong>Maha kumbh mela 2025:</strong> Generated an estimated
              revenue of ₹3 lakh crore for Uttar Pradesh.
            </li>
            <li>
              <strong>Employment:</strong> Created about 8 lakh jobs across
              various sectors.
            </li>
            <li>
              <strong>Tourism Boost:</strong> Attracted over 660 million
              visitors, including 3-4 million foreign tourists.
            </li>
            <li>
              <strong>GDP Contribution:</strong> Maha Khumb Mela helped India to
              achieve 6.5% GDP for the finanical year 2025 as told by Chief
              Economic Advisor V. Anantha Nageswaran.
            </li>
            <li>
              <strong>Infrastructure Investment:</strong> With ₹2,100 crore from
              the Centre and ₹5,400 crore from the state government, the Uttar
              Pradesh government made a significant infrastructure investment
              prior to the Maha Kumbh Mela. According to government data, a
              total of ₹7,500 crore was set aside for Prayagraj construction
              projects, including as highways, flyovers, and underpasses, in
              order to accommodate the large congregation.
            </li>
          </ul>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1741007160/DALL_E_2025-03-03_18.34.30_-_A_vibrant_scene_from_the_Maha_Kumbh_Mela_showcasing_local_vendors_and_businesses_thriving._The_image_captures_a_bustling_marketplace_with_colorful_st_lrtcd1.webp"
            alt="Economic activities during Maha Kumbh Mela"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3 text-sm">
            Local vendors and businesses thrive during the Maha Kumbh Mela
          </div>
        </div>

        <p>
          The 2025 Maha Kumbh Mela is expected to have an even larger economic
          impact due to its special significance and the anticipated increase in
          both domestic and international visitors. This event not only boosts
          the immediate local economy but also has long-lasting effects on
          infrastructure development and India's global image as a cultural and
          spiritual destination.
        </p>
      </section>

      <section id="banking-services" className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Banking Services Available During Maha Kumbh Mela
        </h2>
        <p>
          The Uttar Pradesh government, in collaboration with major banks,
          typically sets up special banking facilities during the Kumbh Mela to
          serve the millions of pilgrims. For the 2025 Maha Kumbh, expect
          enhanced banking infrastructure:
        </p>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden my-6">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1740947946/DALL_E_2025-03-03_02.08.49_-_A_vibrant_scene_of_mobile_banking_services_at_Kumbh_Mela._A_modern_banking_kiosk_or_ATM_van_is_set_up_in_a_crowded_fairground_with_pilgrims_and_visito_a45nea.webp"
            alt="Mobile banking services at Kumbh Mela"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Temporary Bank Branches
            </h3>
            <p>
              Major banks including SBI, PNB, Bank of Baroda, and others set up
              temporary branches within the Kumbh Mela grounds. These branches
              offer services like:
            </p>
            <ul className="mt-3 space-y-1">
              <li>Cash withdrawals and deposits</li>
              <li>Fund transfers</li>
              <li>New account opening</li>
              <li>Currency exchange for international pilgrims</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Mobile ATMs</h3>
            <p>
              Numerous mobile ATMs are deployed throughout the Kumbh Mela area,
              providing 24/7 access to cash. These are strategically placed
              near:
            </p>
            <ul className="mt-3 space-y-1">
              <li>Major bathing ghats</li>
              <li>Accommodation areas</li>
              <li>Main thoroughfares</li>
              <li>Food and shopping zones</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Digital Banking Facilities
            </h3>
            <p>
              For the 2025 Maha Kumbh, expect enhanced digital banking
              infrastructure:
            </p>
            <ul className="mt-3 space-y-1">
              <li>Free Wi-Fi zones for mobile banking</li>
              <li>UPI-enabled payment systems at shops and stalls</li>
              <li>Banking assistance kiosks with internet access</li>
              <li>Digital banking education camps</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Emergency Banking Services
            </h3>
            <p>Special provisions for emergency situations:</p>
            <ul className="mt-3 space-y-1">
              <li>Lost card reporting centers</li>
              <li>Emergency cash services</li>
              <li>Document recovery assistance</li>
              <li>24/7 banking helplines</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-200 dark:border-yellow-700">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-yellow-600 dark:text-yellow-400"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Important Safety Advisory
          </h3>
          <p>
            During large gatherings like Maha Kumbh Mela, there's an increased
            risk of financial fraud and theft. Be cautious of:
          </p>
          <ul className="mt-3 space-y-2">
            <li>Unauthorized or fake ATMs - Always verify the authenticity</li>
            <li>Shoulder surfing while entering PINs</li>
            <li>Skimming devices attached to legitimate ATMs</li>
            <li>Fraudulent QR codes for payments</li>
            <li>Individuals posing as bank representatives</li>
          </ul>
          <p className="mt-4">
            Always verify the IFSC code before making any transactions. Use our
            website to confirm the correct IFSC codes for banks in Prayagraj.
          </p>
        </div>
      </section>

      <section id="faqs" className="mt-10">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions About Maha Kumbh Mela 2025
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              When is the next Maha Kumbh Mela after 144 years?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The Maha Kumbh Mela occurs once every 144 years at Prayagraj.
                The upcoming Maha Kumbh is scheduled for early 2025
                (January-February). The next one after this will be held in
                2169.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What are the Maha Kumbh Mela 2025 dates and place?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The Maha Kumbh Mela 2025 will be held at Prayagraj (formerly
                Allahabad), Uttar Pradesh, India. The main festival period is
                expected to run from January 13 to February 26, 2025, with the
                most auspicious bathing day (Mauni Amavasya) falling on January
                29, 2025.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              After how many years is Maha Kumbh held?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The regular Kumbh Mela is held every 12 years at four locations
                (Prayagraj, Haridwar, Ujjain, and Nashik) in rotation. However,
                the Maha Kumbh Mela, which is the grandest of all Kumbh
                celebrations, occurs specifically at Prayagraj once every 144
                years (12 Kumbh cycles).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              When is the next Maha Kumbh Mela 144 years after 2025?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Following the 2025 Maha Kumbh Mela at Prayagraj, the next Maha
                Kumbh will be held 144 years later in 2169. This makes the 2025
                event a once-in-a-lifetime opportunity for most people alive
                today.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Why is Maha Kumbh celebrated?</AccordionTrigger>
            <AccordionContent>
              <p>
                Maha Kumbh is celebrated to commemorate the mythological event
                when drops of amrit (elixir of immortality) fell at four places
                in India during a battle between the devas (gods) and asuras
                (demons). According to Hindu belief, taking a holy dip in the
                sacred rivers during this time cleanses one of all sins and
                breaks the cycle of rebirth. The Maha Kumbh at Prayagraj is
                considered especially powerful as it's believed the largest
                amount of amrit fell at this location.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Which astronomical bodies' location decides the timing of Maha
              Kumbh Mela?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The timing of Maha Kumbh Mela is determined by specific
                astronomical alignments. For the Maha Kumbh at Prayagraj, it
                occurs when Jupiter enters Aries (Mesh Rashi), and the Sun and
                Moon are in Capricorn (Makar Rashi) during the Hindu month of
                Magha. This rare planetary configuration happens once every 144
                years and is considered extremely auspicious.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              What precautions should be taken regarding the Maha Kumbh Mela
              stampede risk?
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <p>
                  Given the massive crowds at Maha Kumbh Mela, stampede risk is
                  a genuine concern. To stay safe:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Always follow directions from authorities and volunteers
                  </li>
                  <li>Avoid the most crowded bathing days if possible</li>
                  <li>Keep emergency contact numbers saved</li>
                  <li>Stay with your group and establish meeting points</li>
                  <li>Carry minimal belongings and secure your valuables</li>
                  <li>Be aware of exit routes from crowded areas</li>
                  <li>
                    Consider visiting during early morning or evening hours when
                    crowds may be thinner
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              What banking facilities will be available at Prayagraj during Maha
              Kumbh 2025?
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <p>
                  During Maha Kumbh 2025, Prayagraj will have extensive banking
                  facilities including:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Temporary branches of major banks within the Kumbh grounds
                  </li>
                  <li>Mobile ATMs strategically placed throughout the area</li>
                  <li>Digital banking kiosks with internet connectivity</li>
                  <li>UPI and mobile payment support at most vendors</li>
                  <li>Currency exchange services for international pilgrims</li>
                  <li>Banking assistance centers for emergencies</li>
                </ul>
                <p className="mt-2">
                  Remember to note down the IFSC codes of major banks in
                  Prayagraj before your journey, which you can find on our
                  website.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              How should I plan my finances for attending Maha Kumbh Mela 2025?
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <p>Financial planning for Maha Kumbh Mela should include:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Budget for accommodation, food, transportation, and
                    offerings
                  </li>
                  <li>Carry limited cash and rely more on digital payments</li>
                  <li>Have emergency funds accessible via mobile banking</li>
                  <li>Save IFSC codes of your bank and banks in Prayagraj</li>
                  <li>Set up and test UPI payments before traveling</li>
                  <li>
                    Inform your bank about your travel plans to prevent card
                    blocks
                  </li>
                  <li>
                    Consider travel insurance that covers loss of belongings
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
        <h2 className="text-2xl font-bold mb-4">
          Preparing for Your Maha Kumbh Mela Journey
        </h2>
        <p>
          The Maha Kumbh Mela 2025 represents a rare spiritual opportunity that
          occurs just once every 144 years. Proper preparation, including
          financial planning and awareness of banking services, will help ensure
          your pilgrimage is safe, smooth, and spiritually fulfilling.
        </p>
        <p className="mt-4">
          Before embarking on your journey to Prayagraj, be sure to:
        </p>
        <ul className="mt-2 space-y-2">
          <li>✓ Research accommodation options well in advance</li>
          <li>✓ Set up and test mobile banking applications</li>
          <li>✓ Note down IFSC codes of your bank and banks in Prayagraj</li>
          <li>✓ Create a detailed budget for your entire stay</li>
          <li>✓ Arrange for secure storage of valuables</li>
        </ul>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Find IFSC Codes for Banks in Prayagraj
          </a>
        </div>
      </section>
    </div>
  );
};

export default MahaKhumb;
