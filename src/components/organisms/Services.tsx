import { Title } from '../atoms/Title'
import { ServiceBox } from '../molecules/ServiceBox'
import { ServiceGreenLine } from '../molecules/ServiceGreenLine'

export const Services = () => {
  const servicesPlans = {
    photoBasic: [
      {
        text: '20 fotos',
        status: true,
      },
      {
        text: '1 vídeo',
        status: true,
      },
      {
        text: '10 fotos editadas',
        status: true,
      },
    ],
    photoEssential: [
      {
        text: '30 fotos',
        status: true,
      },
      {
        text: '2 vídeo',
        status: true,
      },
      {
        text: '15 fotos editadas',
        status: true,
      },
    ],
    designBasic: [
      {
        text: 'Logotipo',
        status: true,
      },
      {
        text: 'Sublogo',
        status: false,
      },
      {
        text: "Marca D'água",
        status: true,
      },
      {
        text: 'Paleta de Cores',
        status: true,
      },
      {
        text: 'Tipografia',
        status: true,
      },
      {
        text: 'Arte de Cartão de Visita',
        status: false,
      },
      {
        text: 'Destaques do Instagram',
        status: false,
      },
    ],
    designEssential: [
      {
        text: 'Logotipo',
        status: true,
      },
      {
        text: 'Sublogo',
        status: true,
      },
      {
        text: "Marca D'água",
        status: true,
      },
      {
        text: 'Paleta de Cores',
        status: true,
      },
      {
        text: 'Tipografia',
        status: true,
      },
      {
        text: 'Arte de Cartão de Visita',
        status: true,
      },
      {
        text: 'Destaques do Instagram',
        status: true,
      },
    ],
  }
  return (
    <section className="flex flex-col items-center justify-center  mt-8">
      <ServiceGreenLine text="Fotografia" image="camera" />
      <section className="flex flex-col justify-center gap-16 sm:gap-0 sm:flex-row  sm:justify-around lg:w-256 w-full mt-10 mb-40">
        <ServiceBox
          fixedHeader
          title="Pacote Básico"
          price="300,00"
          lines={servicesPlans.photoBasic}
        />
        <ServiceBox
          fixedHeader
          title="Pacote Essencial"
          price="450,00"
          lines={servicesPlans.photoEssential}
        />
      </section>
      <ServiceGreenLine text="Identidade Visual" image="designer" />
      <section className="flex flex-col sm:gap-0 sm:flex-row  gap-16  sm:justify-around lg:w-256 w-full mt-10 mb-40">
        <ServiceBox
        fixedHeader
          title="Pacote Básico"
          price="300,00"
          lines={servicesPlans.designBasic}
        />
        <ServiceBox
        fixedHeader
          title="Pacote Essencial"
          price="450,00"
          lines={servicesPlans.designEssential}
        />
      </section>
      <ServiceGreenLine text="Landing Page" image="programmer" />
      <section className="lg:w-256 w-full flex flex-col sm:flex-row sm:justify-around mt-10 mb-40">
        <ServiceBox
          fixedHeader
          hideCurrency
          title="Landing Page"
          price="Orçamento no contato abaixo"
          lines={servicesPlans.designBasic}
        />
      </section>
      <div className="h-[1px] w-full bg-main-red my-10"></div>
    </section>
  )
}
