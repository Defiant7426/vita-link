import TopBar from '../components-Home/TopBar';
import Header from '../components-Home/Header';

interface InfoSectionProps {
  title: string;
  imageSrc: string;
  items: string[];
}

function InfoSection({ title, imageSrc, items }: InfoSectionProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={imageSrc}
          alt={title}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-teal-500"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface BasicInfo {
  name: string;
  age: string;
  id: string;
  email: string;
  phone: string;
  address: string;
  imageSrc: string;
}

const basicInfo: BasicInfo = {
  name: 'Luis Fernández',
  age: '35 años',
  id: '#123456789',
  email: 'luis.fernandez@example.com',
  phone: '+34 123 456 789',
  address: 'Calle Ejemplo 123, Madrid, España',
  imageSrc:
    'https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1576497920/content-items/003/518/382/JuanCruzPedroni-46-original.jpg?1576497920',
};

interface Section {
  title: string;
  imageSrc: string;
  items: string[];
}

const sections: Section[] = [
  {
    title: 'Historial Médico',
    imageSrc: 'https://th.bing.com/th/id/OIP.eoeRfMofo4xO1bcgxthxxQHaE8?rs=1&pid=ImgDetMain',
    items: ['Hipertensión desde 2018', 'Alergia a penicilina', 'Cirugía de apendicitis en 2020'],
  },
  // ... otras secciones
];

export default function Perfil() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="max-w-4xl mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={basicInfo.imageSrc}
              alt="Foto del Paciente"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-teal-500"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{basicInfo.name}</h2>
            <p className="text-gray-600">Edad: {basicInfo.age}</p>
            <p className="text-gray-600">Número de Identificación: {basicInfo.id}</p>
            <p className="text-gray-600">Correo electrónico: {basicInfo.email}</p>
            <p className="text-gray-600">Teléfono: {basicInfo.phone}</p>
            <p className="text-gray-600">Dirección: {basicInfo.address}</p>
          </div>
        </div>
        {sections.map((section: Section, index: number) => (
          <InfoSection
            key={index}
            title={section.title}
            imageSrc={section.imageSrc}
            items={section.items}
          />
        ))}
      </main>
    </>
  );
}
