//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  // companies icons
  import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
  import UpworkBrandIcon from './assets/img/brands/upwork.png';
  import FiverBrandIcon from './assets/img/brands/fiverr.png';
  import BehanceBrandIcon from './assets/img/brands/behance.png';
  import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
  
  // projects images
  import Project1 from './assets/img/projects/p1.webp';
  import Project2 from './assets/img/projects/p2.webp';
  import Project3 from './assets/img/projects/p3.webp';
  import Project4 from './assets/img/projects/p4.webp';
  import Project5 from './assets/img/projects/p5.webp';
  import Project6 from './assets/img/projects/p6.webp';
  
  // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/css3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/reactjs.png';
  import SkillImg5 from './assets/img/skills/nextjs.png';
  import SkillImg6 from './assets/img/skills/nodejs.png';
  import SkillImg7 from './assets/img/skills/git.png';
  import SkillImg8 from './assets/img/skills/figma.png';
  import SkillImg9 from './assets/img/skills/photoshop.png';
  import SkillImg10 from './assets/img/skills/framer.png';
  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
  import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
  import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    // {
    //   name: 'testimonials',
    //   href: 'testimonials',
    // },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiDribbble />,
      href: '',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project2,
      name: 'project name 2',
      category: 'web development',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: Project5,
      name: 'project name 5',
      category: 'web development',
    },
    {
      id: '6',
      image: Project6,
      name: 'project name 6',
      category: 'web development',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
    {
      image: SkillImg9,
    },
    {
      image: SkillImg10,
    },
  ];
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        "Je conçois des interfaces modernes et intuitives qui offrent une expérience utilisateur fluide et agréable. Chaque projet est pensé pour allier esthétisme et fonctionnalité, en mettant l'accent sur un design responsive et adapté à vos besoins spécifiques."
    },
    {
      icon: <FiSettings />,
      name: 'Développement Web',
      description:
        "Je développe des sites web dynamiques et performants en utilisant les dernières technologies. Mon objectif est de créer des solutions sur mesure, évolutives et sécurisées, pour offrir une expérience fluide et efficace à vos utilisateurs."
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        "Je vous aide à construire une identité visuelle forte et cohérente qui reflète l’essence de votre marque. De la conception de votre logo à la création d’une charte graphique, chaque élément est conçu pour véhiculer vos valeurs et captiver votre public cible."
    },
    {
      icon: <FiTag />,
      name: 'Maintenance & Support',
      description:
        "Je propose des services de maintenance et de support pour garantir que votre site reste à jour, sécurisé et performant. Que ce soit pour des mises à jour régulières, des corrections de bugs ou des améliorations, je m'assure que votre site fonctionne toujours de manière optimale."
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Une question?',
      subtitle: 'Je suis là pour vous aider.',
      description: (
        <span>
          Envoyez-moi un email à{' '}
          <a href="mailto:kodjogbeaurel4@gmail.com" className="text-[#077b32] hover:underline">
            kodjogbeaurel4@gmail.com
          </a>
        </span>
      ),
    },
    
    {
      icon: <FiMapPin />,
      title: 'Localisation actuelle',
      subtitle: 'Benin, Cotonou',
      // description: 'Je sers des clients partout dans le monde',
    },
  ];