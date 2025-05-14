import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Noted Intrepid Hamster</title>
        <meta property="og:title" content="Noted Intrepid Hamster" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">index.html</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">explorar.html</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">actividades.html</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">contacto.html</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Inicio</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Explorar</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Actividades</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contacto</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Acción 1</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Acción 2</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Bienvenidos al blog &apos;Rutas del Arte: Explorando el Centro
              León y los Museos del Cibao Central&apos;. Aquí podrás descubrir
              la riqueza cultural de esta región a través de nuestras
              publicaciones.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Descubre más sobre los lugares emblemáticos del arte en el Centro
              León y otros museos del Cibao Central.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Participa en nuestras actividades educativas y culturales para
              enriquecer tu experiencia artística.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              ¿Tienes alguna pregunta o sugerencia? ¡Contáctanos! Estamos aquí
              para ayudarte.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Explora más</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Únete a nuestra comunidad</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Bienvenidos al blog colaborativo de estudiantes de 4to de
              Informática del COPPHU. En este espacio, exploraremos juntos la
              riqueza cultural y artística del Centro León y otros museos del
              Cibao Central. Acompáñanos en este viaje de descubrimiento y
              aprendizaje.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Rutas del Arte: Explorando el Centro León y los Museos del Cibao
              Central
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Discover Centro León Museum</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">
              Meet the Artists of Cibao Central
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">
              Dive into Cibao Central&apos;s Art Scene
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Uncover the fascinating world of Dominican art and history at the
              Centro León museum.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Learn about the renowned artists whose works are showcased in the
              museums of the Cibao Central.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Explore the rich history and culture of the Cibao Central region
              through various art exhibitions and collections.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Explora más</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Descubre con nosotros la riqueza cultural del Centro León y los
              museos del Cibao Central. ¡No te lo pierdas!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              ¡Únete a nuestra comunidad de exploradores del arte!
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Virtual Tours</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Art Exhibitions</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Interactive Maps</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Explore the Centro León and other museums through immersive
              virtual tours from the comfort of your home.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Discover a wide range of art exhibitions showcasing the rich
              cultural heritage of the Cibao Central region.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Navigate through the museums and historical sites with interactive
              maps that provide detailed information about each location.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$5.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$9.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$14.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Subscribe Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Subscribe Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Subscribe Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Access to exclusive blog posts</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">
              Weekly newsletter with art news
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Discounts on museum tickets</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">All features from Plan 1</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Virtual tours of museums</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">
              Monthly live Q&amp;A sessions with artists
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">
              All features from Plan 1 and Plan 2
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">
              Personalized art recommendations
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              Invitations to exclusive art events
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Researching the Museums</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Creating Blog Content</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Designing the Blog</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Sharing with the Community</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Start by researching the Centro León and other museums in the
              Cibao Central region to gather information about their history,
              collections, and significance.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Collaborate with your classmates to create engaging blog posts
              about the different museums, highlighting interesting facts,
              artworks, and upcoming events.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Use HTML, CSS, and JavaScript to design and customize the blog
              layout, ensuring it is visually appealing and easy to navigate for
              readers.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Once the blog is complete, share it with your school community,
              friends, and family to promote cultural exploration and encourage
              visits to these enriching cultural spaces.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              ¡Recomiendo totalmente esta experiencia a todos los amantes del
              arte y la historia! Es una oportunidad única para aprender y
              disfrutar.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Explorar los museos del Cibao Central me ha inspirado a seguir
              aprendiendo sobre nuestro patrimonio cultural. ¡Una experiencia
              que recordaré siempre!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              El arte y la historia se unen en cada rincón de estos museos. ¡Una
              experiencia educativa que todos deberían vivir al menos una vez!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Descubrir el Centro León y los museos del Cibao Central ha
              despertado mi curiosidad por la cultura dominicana. ¡Una visita
              obligada para todos!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Visitar el Centro León y los museos del Cibao Central ha sido una
              experiencia enriquecedora que me ha permitido conocer más sobre
              nuestra historia y cultura.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Experiencia enriquecedora</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">Sofia Ramirez</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Carlos Fernandez</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Luisa Martinez</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Javier Lopez</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">Student at COPPHU</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">4th year Informatics student</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Future IT professional</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Tech enthusiast</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">COPPHU School of Informatics</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Email Us</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Address: 123 Main Street, Santiago, Dominican Republic
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Email: info@copphuinformatics.edu
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Inicio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Acerca de nosotros</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Contacto</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Política de privacidad</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Términos y condiciones</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Política de cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Política de privacidad</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
