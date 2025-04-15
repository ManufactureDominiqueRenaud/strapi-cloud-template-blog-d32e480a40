import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    externalLink: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectsComponentsImageAndTextSection
  extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_image_and_text_sections';
  info: {
    displayName: 'imageAndTextSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    isImageOnLeft: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    paragraph3: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsImageSection extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_image_sections';
  info: {
    displayName: 'imageSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ProjectsComponentsStudent extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_students';
  info: {
    displayName: 'student';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsTextSection extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_text_sections';
  info: {
    displayName: 'textSection';
  };
  attributes: {
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    paragraph3: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsTwoImagesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_two_images_sections';
  info: {
    displayName: 'twoImagesSection';
  };
  attributes: {
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ProjectsComponentsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_video_sections';
  info: {
    displayName: 'videoSection';
  };
  attributes: {
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageAtelierProjet extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_atelier_projets';
  info: {
    description: '';
    displayName: 'atelierProjet';
  };
  attributes: {
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageCarouselSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_carousel_sections';
  info: {
    description: '';
    displayName: 'carousel';
  };
  attributes: {
    carouselImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageCollabSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_collab_sections';
  info: {
    description: '';
    displayName: 'collaboration';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.footer-link', false> &
      Schema.Attribute.Required;
    labelCtaDownloadPressArticle: Schema.Attribute.String &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    pdfUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageDominiqueRenaudSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_dominique_renaud_sections';
  info: {
    description: '';
    displayName: 'dominiqueRenaud';
    icon: '';
  };
  attributes: {
    citation: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageHeroHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_headers';
  info: {
    description: '';
    displayName: 'heroHeader';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'components.footer-link', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageMdrDetails extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_mdr_details';
  info: {
    displayName: 'mdrDetails';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomepageProjectFolio extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_project_folios';
  info: {
    displayName: 'projectFolio';
  };
  attributes: {
    paragraph: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.footer-link': ComponentsFooterLink;
      'projects-components.image-and-text-section': ProjectsComponentsImageAndTextSection;
      'projects-components.image-section': ProjectsComponentsImageSection;
      'projects-components.student': ProjectsComponentsStudent;
      'projects-components.text-section': ProjectsComponentsTextSection;
      'projects-components.two-images-section': ProjectsComponentsTwoImagesSection;
      'projects-components.video-section': ProjectsComponentsVideoSection;
      'sections-homepage.atelier-projet': SectionsHomepageAtelierProjet;
      'sections-homepage.carousel-section': SectionsHomepageCarouselSection;
      'sections-homepage.collab-section': SectionsHomepageCollabSection;
      'sections-homepage.dominique-renaud-section': SectionsHomepageDominiqueRenaudSection;
      'sections-homepage.hero-header': SectionsHomepageHeroHeader;
      'sections-homepage.mdr-details': SectionsHomepageMdrDetails;
      'sections-homepage.project-folio': SectionsHomepageProjectFolio;
    }
  }
}
