declare module 'glightbox' {
  export type GLightboxOptions = {
    selector?: string;
    elements?: [];
    skin?: string;
    openEffect?: string;
    closeEffect?: string;
    slideEffect?: string;
    moreText?: string;
    moreLength?: number;
    closeButton?: boolean;
    touchNavigation?: boolean;
    touchFollowAxis?: boolean;
    keyboardNavigation?: boolean;
    closeOnOutsideClick?: boolean;
    startAt?: number;
    width?: number;
    height?: number;
    videosWidth?: number;
    descPosition?: string;
    loop?: boolean;
    zoomable?: boolean;
    draggable?: boolean;
    dragToleranceX?: number;
    dragToleranceY?: number;
    dragAutoSnap?: boolean;
    preload?: boolean;
    svg?: Record<string, any>;
    cssEfects?: Record<string, any>;
    lightboxHTML?: string;
    slideHTML?: string;
    autoplayVideos?: boolean;
    autofocusVideos?: boolean;
    plyr?: Record<string, any>;
  }

  export type GlightboxSlideConfig = Record<string, any>

  export type GlightboxEventType = 'open' |  'close' |  'slide_before_change' |  'slide_changed' |  'slide_before_load' |  'slide_after_load' |  'slide_inserted' |  'slide_removed';

  // TODO:
  //   This is probably the same as Plyr, but it is not needed in this repository and will be omitted.
  //   https://github.com/sampotts/plyr
  export type GlightboxPlayer = Record<string, any>;

  export type Glightbox = {
    open: (node?: any) => void;
    openAt: (index: number) => void;
    close: () => void;
    reload: () => void;
    destroy: () => void;
    prevSlide: () => void;
    nextSlide: () => void;
    goToSlide: (index: number) => void;
    insertSlide: (config: GlightboxSlideConfig, index: number) => void;
    removeSlide: (index: number) => void;
    getActiveSlide: () => Element;
    getActiveSlideIndex: () => number;
    slidePlayerPlay: (index: number) => void;
    slidePlayerPause: (index: number) => void;
    getSlidePlayerInstance: (nodeOrindex: Node | number) => boolean | Record<string, any>;
    getAllPlayers: () => GlightboxPlayer[];
    setElements: (elements: any[]) => void;
    on: (type: GlightboxEventType, fn: () => void, once?: boolean) => void;
    once: (type: GlightboxEventType, fn: () => void) => void;
  }

  export default function (options: GLightboxOptions): Glightbox;
}