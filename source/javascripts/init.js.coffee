$(document).foundation(
  topbar:
    index : 0,
    stickyClass : 'sticky',
    custom_back_text: true,
    back_text: 'zurück',
    init : true,
    mobile_show_parent_link: false,
    scrolltop: false, # both this and `is_hover: false` are needed to prevent scrolling to top of the page when opening the small breakpoint's sticky navigation
    is_hover: false)
