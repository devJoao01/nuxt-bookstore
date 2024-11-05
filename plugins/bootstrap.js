import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Alert', Alert);
  nuxtApp.provide('Button', Button);
  nuxtApp.provide('Carousel', Carousel);
  nuxtApp.provide('Collapse', Collapse);
  nuxtApp.provide('Dropdown', Dropdown);
  nuxtApp.provide('Modal', Modal);
  nuxtApp.provide('Offcanvas', Offcanvas);
  nuxtApp.provide('Popover', Popover);
  nuxtApp.provide('ScrollSpy', ScrollSpy);
  nuxtApp.provide('Tab', Tab);
  nuxtApp.provide('Toast', Toast);
  nuxtApp.provide('Tooltip', Tooltip);
});
