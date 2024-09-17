export interface LoginType {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export interface RegistrationType {
  email: string;
  password: string;
}
export interface Post {
  post_id: string;
  author_id: string;
  title: string;
  content: string;
  author_name: string;
  image_url: string;
  pub_date: string;
  slug: string;
  comments: Comment[];
}

export interface Service {
  id: string;
  slug:string;
  title: string;
  leadText: string;
  content: string;
  imageUrl?: string;
  createdAt: Date;
}

export interface ServicesProps {
  services?: Service[];
}

export interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}



export interface HomeProps {
    logoImg: string;
    footerImg: string;
    headerImg: string;
    sectionAboutImg: string;
    sectionServicesImg: string;
}