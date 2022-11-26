export interface IHandleProps {
  handleCloseMenu: () => void;
}

// blog 페이지에 사용될 타입

interface IAttributesProps {
  content: string;
  createdAt: string;
  publishedAt: string;
  subtitle: string;
  title: string;
  updatedAt: string;
}

interface ITagProps {
  data: {
    id: number;
    attributes: IAttributesProps;
  };
}

export interface IMetaProps {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

interface IThumbnailProps {
  data: {
    id: number;
    attributes: {
      alternativeText: null;
      caption: null;
      createdAt: string;
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      size: number;
      updatedAt: string;
      url: string;
      width: 500;
      formats: {
        thumbnail: {
          ext: string;
          hash: string;
          height: number;
          mime: string;
          name: string;
          path: null;
          size: number;
          url: string;
          width: number;
        };
      };
    };
  };
}

export interface IPostsProps {
  data: {
    id: number;
    attributes: IAttributesProps;
    tag: ITagProps;
    thumbnail: IThumbnailProps;
  };
  meta: IMetaProps;
}

// Posts 컴포넌트에 사용될 타입

export interface IPostsDataProps {
  id: number;
  attributes: {
    content: string;
    createdAt: string;
    publishedAt: string;
    subtitle: string;
    title: string;
    updatedAt: string;
    tag: {
      id: number;
      data: {
        attributes: {
          createdAt: string;
          publishedAt: string;
          tag: string;
          updatedAt: string;
        };
      };
    };
    thumbnail: IThumbnailProps;
  };
}
