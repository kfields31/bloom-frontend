export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FORCED = 'LOGOUT_FORCED';

export const GET_LOGIN_USER_REQUEST = 'GET_LOGIN_USER_REQUEST';
export const GET_LOGIN_USER_SUCCESS = 'GET_LOGIN_USER_SUCCESS';
export const GET_LOGIN_USER_ERROR = 'GET_LOGIN_USER_ERROR';

export const GET_AUTH_USER_REQUEST = 'GET_AUTH_USER_REQUEST';
export const GET_AUTH_USER_SUCCESS = 'GET_AUTH_USER_SUCCESS';
export const GET_AUTH_USER_ERROR = 'GET_AUTH_USER_ERROR';

export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const EMAIL_REMINDERS_SET_ERROR = 'EMAIL_REMINDERS_SET_ERROR';
export const EMAIL_REMINDERS_SET_REQUEST = 'EMAIL_REMINDERS_SET_REQUEST';
export const EMAIL_REMINDERS_SET_SUCCESS = 'EMAIL_REMINDERS_SET_SUCCESS';
export const EMAIL_REMINDERS_UNSET_ERROR = 'EMAIL_REMINDERS_UNSET_ERROR';
export const EMAIL_REMINDERS_UNSET_REQUEST = 'EMAIL_REMINDERS_UNSET_REQUEST';
export const EMAIL_REMINDERS_UNSET_SUCCESS = 'EMAIL_REMINDERS_UNSET_SUCCESS';

export const ABOUT_YOU_VIEWED = 'ABOUT_YOU_VIEWED';

export const ABOUT_YOU_DEMO_REQUEST = 'ABOUT_YOU_DEMO_REQUEST';
export const ABOUT_YOU_DEMO_SUCCESS = 'ABOUT_YOU_DEMO_SUCCESS';
export const ABOUT_YOU_DEMO_ERROR = 'ABOUT_YOU_DEMO_ERROR';

export const ABOUT_YOU_SETA_REQUEST = 'ABOUT_YOU_SETA_REQUEST';
export const ABOUT_YOU_SETA_SUCCESS = 'ABOUT_YOU_SETA_SUCCESS';
export const ABOUT_YOU_SETA_ERROR = 'ABOUT_YOU_SETA_ERROR';

export const SIGNUP_SURVEY_SKIPPED = 'SIGNUP_SURVEY_SKIPPED';
export const SIGNUP_SURVEY_COMPLETED = 'SIGNUP_SURVEY_COMPLETED';

export const VALIDATE_ACCESS_CODE_REQUEST = 'VALIDATE_ACCESS_CODE_REQUEST';
export const VALIDATE_ACCESS_CODE_SUCCESS = 'VALIDATE_ACCESS_CODE_SUCCESS';
export const VALIDATE_ACCESS_CODE_INVALID = 'VALIDATE_ACCESS_CODE_INVALID';
export const VALIDATE_ACCESS_CODE_ERROR = 'VALIDATE_ACCESS_CODE_ERROR';

export const ASSIGN_NEW_PARTNER_VIEWED = 'ASSIGN_NEW_PARTNER_VIEWED';
export const ASSIGN_NEW_PARTNER_ACCESS_REQUEST = 'ASSIGN_NEW_PARTNER_ACCESS_REQUEST';
export const ASSIGN_NEW_PARTNER_ACCESS_SUCCESS = 'ASSIGN_NEW_PARTNER_ACCESS_SUCCESS';
export const ASSIGN_NEW_PARTNER_ACCESS_ERROR = 'ASSIGN_NEW_PARTNER_ACCESS_ERROR';
export const ASSIGN_NEW_PARTNER_ACCESS_INVALID = 'ASSIGN_NEW_PARTNER_ACCESS_INVALID';

export const THERAPY_BOOKING_VIEWED = 'THERAPY_BOOKING_VIEWED';
export const THERAPY_BOOKING_OPENED = 'THERAPY_BOOKING_OPENED';
export const THERAPY_CONFIRMATION_VIEWED = 'THERAPY_CONFIRMATION_VIEWED';
export const THERAPY_FAQ_OPENED = 'THERAPY_FAQ_OPENED';

export const COURSE_LIST_VIEWED = 'COURSE_LIST_VIEWED';
export const COURSE_OVERVIEW_VIEWED = 'COURSE_OVERVIEW_VIEWED';

export const COURSE_INTRO_VIDEO_STARTED = 'COURSE_INTRO_VIDEO_STARTED'; // Event in use but not exported - applied using eventPrefix
export const COURSE_INTRO_VIDEO_PAUSED = 'COURSE_INTRO_VIDEO_PAUSED'; // Event in use but not exported - applied using eventPrefix
export const COURSE_INTRO_VIDEO_PLAYED = 'COURSE_INTRO_VIDEO_PLAYED'; // Event in use but not exported - applied using eventPrefix
export const COURSE_INTRO_VIDEO_FINISHED = 'COURSE_INTRO_VIDEO_FINISHED'; // Event in use but not exported - applied using eventPrefix

export const COURSE_INTRO_VIDEO_TRANSCRIPT_OPENED = 'COURSE_INTRO_TRANSCRIPT_OPENED';
export const COURSE_INTRO_VIDEO_TRANSCRIPT_CLOSED = 'COURSE_INTRO_TRANSCRIPT_CLOSED';

export const RESOURCE_CONVERSATION_VIEWED = 'RESOURCE_CONVERSATION_VIEWED';
export const RESOURCE_SHORT_VIDEO_VIEWED = 'RESOURCE_SHORT_VIDEO_VIEWED';
export const RESOURCE_CONVERSATION_STARTED = 'RESOURCE_CONVERSATION_STARTED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_CONVERSATION_PLAYED = 'RESOURCE_CONVERSATION_PLAYED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_CONVERSATION_PAUSED = 'RESOURCE_CONVERSATION_PAUSED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_CONVERSATION_FINISHED = 'RESOURCE_CONVERSATION_FINISHED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_SHORT_VIDEO_PLAYED = 'RESOURCE_SHORT_VIDEO_PLAYED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_SHORT_VIDEO_PAUSED = 'RESOURCE_SHORT_VIDEO_PAUSED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_SHORT_VIDEO_FINISHED = 'RESOURCE_SHORT_VIDEO_FINISHED'; // Event in use but not exported - applied using eventPrefix
export const RESOURCE_SHORT_VIDEO_STARTED_REQUEST = 'RESOURCE_SHORT_VIDEO_STARTED_REQUEST';
export const RESOURCE_SHORT_VIDEO_STARTED_SUCCESS = 'RESOURCE_SHORT_VIDEO_STARTED_SUCCESS';
export const RESOURCE_SHORT_VIDEO_STARTED_ERROR = 'RESOURCE_SHORT_VIDEO_STARTED_ERROR';
export const RESOURCE_SHORT_VIDEO_COMPLETE_REQUEST = 'RESOURCE_SHORT_VIDEO_COMPLETE_REQUEST';
export const RESOURCE_SHORT_VIDEO_COMPLETE_SUCCESS = 'RESOURCE_SHORT_VIDEO_COMPLETE_SUCCESS';
export const RESOURCE_SHORT_VIDEO_COMPLETE_ERROR = 'RESOURCE_SHORT_VIDEO_COMPLETE_ERROR';
export const RESOURCE_CONVERSATION_STARTED_REQUEST = 'RESOURCE_CONVERSATION_STARTED_REQUEST';
export const RESOURCE_CONVERSATION_STARTED_SUCCESS = 'RESOURCE_CONVERSATION_STARTED_SUCCESS';
export const RESOURCE_CONVERSATION_STARTED_ERROR = 'RESOURCE_CONVERSATION_STARTED_ERROR';
export const RESOURCE_CONVERSATION_COMPLETE_REQUEST = 'RESOURCE_CONVERSATION_COMPLETE_REQUEST';
export const RESOURCE_CONVERSATION_COMPLETE_SUCCESS = 'RESOURCE_CONVERSATION_COMPLETE_SUCCESS';
export const RESOURCE_CONVERSATION_COMPLETE_ERROR = 'RESOURCE_CONVERSATION_COMPLETE_ERROR';
export const RESOURCE_CONVERSATION_TRANSCRIPT_OPENED = 'RESOURCE_CONVERSATION_TRANSCRIPT_OPENED';
export const RESOURCE_CONVERSATION_TRANSCRIPT_CLOSED = 'RESOURCE_CONVERSATION_TRANSCRIPT_CLOSED';
export const RESOURCE_SHORT_VIDEO_TRANSCRIPT_OPENED = 'RESOURCE_SHORT_VIDEO_TRANSCRIPT_OPENED';
export const RESOURCE_SHORT_VIDEO_TRANSCRIPT_CLOSED = 'RESOURCE_SHORT_VIDEO_TRANSCRIPT_CLOSED';
export const RESOURCE_SHORT_VIDEO_VISIT_SESSION = 'RESOURCE_SHORT_VIDEO_VISIT_SESSION';

export const SESSION_VIEWED = 'SESSION_VIEWED';
export const SESSION_VIDEO_STARTED = 'SESSION_VIDEO_STARTED'; // Event in use but not exported - applied using eventPrefix
export const SESSION_VIDEO_PAUSED = 'SESSION_VIDEO_PAUSED'; // Event in use but not exported - applied using eventPrefix
export const SESSION_VIDEO_PLAYED = 'SESSION_VIDEO_PLAYED'; // Event in use but not exported - applied using eventPrefix
export const SESSION_VIDEO_FINISHED = 'SESSION_VIDEO_FINISHED'; // Event in use but not exported - applied using eventPrefix

export const SESSION_VIDEO_TRANSCRIPT_OPENED = 'SESSION_TRANSCRIPT_OPENED';
export const SESSION_VIDEO_TRANSCRIPT_CLOSED = 'SESSION_TRANSCRIPT_CLOSED';

export const SESSION_STARTED_REQUEST = 'SESSION_STARTED_REQUEST';
export const SESSION_STARTED_SUCCESS = 'SESSION_STARTED_SUCCESS';
export const SESSION_STARTED_ERROR = 'SESSION_STARTED_ERROR';

export const SESSION_COMPLETE_REQUEST = 'SESSION_COMPLETE_REQUEST';
export const SESSION_COMPLETE_SUCCESS = 'SESSION_COMPLETE_SUCCESS';
export const SESSION_COMPLETE_ERROR = 'SESSION_COMPLETE_ERROR';

export const SESSION_VIDEO_EXPANDED = 'SESSION_VIDEO_EXPANDED'; // Event in use but not exported - applied using eventPrefix
export const SESSION_VIDEO_COLLAPSED = 'SESSION_VIDEO_COLLAPSED'; // Event in use but not exported - applied using eventPrefix

export const SESSION_ACTIVITY_EXPANDED = 'SESSION_ACTIVITY_EXPANDED'; // Event in use but not exported - applied using eventPrefix
export const SESSION_ACTIVITY_COLLAPSED = 'SESSION_ACTIVITY_COLLAPSED'; // Event in use but not exported - applied using eventPrefix

export const SESSION_BONUS_CONTENT_EXPANDED = 'SESSION_BONUS_CONTENT_EXPANDED'; // Event in use but not exported - applied using eventPrefix
export const SESSION_BONUS_CONTENT_COLLAPSED = 'SESSION_BONUS_CONTENT_COLLAPSED'; // Event in use but not exported - applied using eventPrefix

export const SESSION_CHAT_BUTTON_CLICKED = 'SESSION_CHAT_BUTTON_CLICKED';

export const CHAT_VIEWED = 'CHAT_VIEWED';
export const CHAT_MESSAGE_COMPOSED = 'CHAT_MESSAGE_COMPOSED';
export const CHAT_MESSAGE_SENT = 'CHAT_MESSAGE_SENT';

export const FAQ_OPENED = 'FAQ_OPENED';
export const ACCORDION_OPENED = 'ACCORDION_OPENED';
export const generateAccordionEvent = (title: string) =>
  `ACCORDION_${title.split(' ').join('_').toUpperCase()}`;
export const generateStoryblokButtonEvent = (text: string) =>
  `STORYBLOK_BUTTON_${text.split(' ').join('_').toUpperCase()}_CLICKED`;

export const LEAVE_SITE_BUTTON_CLICKED = 'LEAVE_SITE_BUTTON_CLICKED';
export const SOCIAL_LINK_CLICKED = 'SOCIAL_LINK_CLICKED';
export const PARTNER_SOCIAL_LINK_CLICKED = 'PARTNER_SOCIAL_LINK_CLICKED';
export const MEET_THE_TEAM_VIEWED = 'MEET_THE_TEAM_VIEWED';

// Admin events

export const CREATE_PARTNER_ACCESS_VIEWED = 'CREATE_PARTNER_ACCESS_VIEWED';
export const CREATE_PARTNER_ACCESS_REQUEST = 'CREATE_PARTNER_ACCESS_REQUEST';
export const CREATE_PARTNER_ACCESS_SUCCESS = 'CREATE_PARTNER_ACCESS_SUCCESS';
export const CREATE_PARTNER_ACCESS_ERROR = 'CREATE_PARTNER_ACCESS_ERROR';

export const UPDATE_THERAPY_SESSIONS = 'UPDATE_THERAPY_SESSIONS';
export const UPDATE_THERAPY_SESSIONS_ERROR = 'UPDATE_THERAPY_SESSIONS_ERROR';

export const UPDATE_PARTNER_ADMIN = 'UPDATE_PARTNER_ADMIN';
export const UPDATE_PARTNER_ADMIN_ERROR = 'UPDATE_PARTNER_ADMIN_ERROR';

// Deprecated

// Replaced by "GET_LOGIN_USER_XXX" and "GET_AUTH_USER_XXX"
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

// HEADER EVENTS
export const HEADER_LANGUAGE_MENU_CLICKED = 'HEADER_LANGUAGE_MENU_CLICKED';
export const HEADER_OUR_BLOOM_TEAM_CLICKED = 'HEADER_OUR_BLOOM_TEAM_CLICKED';
export const HEADER_IMMEDIATE_HELP_CLICKED = 'HEADER_IMMEDIATE_HELP_CLICKED';
export const HEADER_LOGIN_CLICKED = 'HEADER_LOGIN_CLICKED';
export const HEADER_NAVIGATION_MENU_OPENED = 'HEADER_NAVIGATION_MENU_OPENED';
export const HEADER_NAVIGATION_MENU_CLOSED = 'HEADER_NAVIGATION_MENU_CLOSED';
export const HEADER_ADMIN_CLICKED = 'HEADER_ADMIN_CLICKED';
export const HEADER_APPLY_A_CODE_CLICKED = 'HEADER_APPLY_A_CODE_CLICKED';
export const HEADER_HOME_LOGO_CLICKED = 'HEADER_HOME_LOGO_CLICKED';
export const HEADER_ACCOUNT_ICON_CLICKED = 'HEADER_ACCOUNT_ICON_CLICKED';
export const generateLanguageMenuEvent = (language: string) =>
  `HEADER_LANGUAGE_${language.toUpperCase()}_CLICKED`;

// DRAWER EVENTS
export const DRAWER_NOTES_CLICKED = 'DRAWER_NOTES_CLICKED';
export const DRAWER_COURSES_CLICKED = 'DRAWER_COURSES_CLICKED';
export const DRAWER_CHAT_CLICKED = 'DRAWER_CHAT_CLICKED';
export const DRAWER_ACTIVITIES_CLICKED = 'DRAWER_ACTIVITIES_CLICKED';
export const DRAWER_GROUNDING_CLICKED = 'DRAWER_GROUNDING_CLICKED';
export const DRAWER_THERAPY_CLICKED = 'DRAWER_THERAPY_CLICKED';
export const DRAWER_ADMIN_CLICKED = 'DRAWER_ADMIN_CLICKED';
export const DRAWER_OUR_BLOOM_TEAM_CLICKED = 'DRAWER_OUR_BLOOM_TEAM_CLICKED';
export const DRAWER_IMMEDIATE_HELP_CLICKED = 'DRAWER_IMMEDIATE_HELP_CLICKED';
export const DRAWER_LOGIN_CLICKED = 'DRAWER_LOGIN_CLICKED';

// SECONDARY HEADER EVENTS
export const SECONDARY_HEADER_COURSES_CLICKED = 'SECONDARY_HEADER_COURSES_CLICKED';
export const SECONDARY_HEADER_THERAPY_CLICKED = 'SECONDARY_HEADER_THERAPY_CLICKED';
export const SECONDARY_HEADER_NOTES_CLICKED = 'SECONDARY_HEADER_NOTES_CLICKED';
export const SECONDARY_HEADER_CHAT_CLICKED = 'SECONDARY_HEADER_CHAT_CLICKED';
export const SECONDARY_HEADER_ACTIVITIES_CLICKED = 'SECONDARY_HEADER_ACTIVITIES_CLICKED';
export const SECONDARY_HEADER_GROUNDING_CLICKED = 'SECONDARY_HEADER_GROUNDING_CLICKED';

// LOGIN EVENTS
export const RESET_PASSWORD_HERE_CLICKED = 'RESET_PASSWORD_HERE_CLICKED';
export const CREATE_ACCOUNT_LINK_CLICKED = 'CREATE_ACCOUNT_LINK_CLICKED';

export const generateGetStartedPartnerEvent = (partner: string) =>
  `GET_STARTED_WITH_${partner.toUpperCase()}_CLICKED`;

// REGISTER EVENTS
export const generatePartnershipPromoLogoClick = (partner: string) =>
  `PARTNERSHIP_PROMO_${partner.toUpperCase()}_LOGO_CLICKED`;

// PARTNER WELCOME EVENTS
export const generatePartnerPromoGetStartedEvent = (partner: string) =>
  `${partner.toUpperCase()}_PROMO_GET_STARTED_CLICKED`;
export const generatePartnerPromoGoToCoursesEvent = (partner: string) =>
  `${partner.toUpperCase()}_PROMO_GO_TO_COURSES_CLICKED`; // not in use - delete

// HOME PAGE EVENTS
export const PROMO_GET_STARTED_CLICKED = 'PROMO_GET_STARTED_CLICKED';

// COOKIES
export const COOKIES_ACCEPTED = 'COOKIES_ACCEPTED';
export const COOKIES_REJECTED = 'COOKIES_REJECTED';

// USER BANNER
export const USER_BANNER_DISMISSED = 'USER_BANNER_DISMISSED';
export const USER_BANNER_INTERESTED = 'USER_BANNER_INTERESTED';

// USER DISABLE SERVICE EMAILS
export const USER_DISABLED_SERVICE_EMAILS = 'USER_DISABLED_SERVICE_EMAILS';

// SUPER ADMIN DASHBOARD
export const CREATE_PARTNER_ADMIN_REQUEST = 'CREATE_PARTNER_ADMIN_REQUEST';
export const CREATE_PARTNER_ADMIN_SUCCESS = 'CREATE_PARTNER_ADMIN_SUCCESS';
export const CREATE_PARTNER_ADMIN_ERROR = 'CREATE_PARTNER_ADMIN_ERROR';

// WHATSAPP SUBSCRIBE
export const WHATSAPP_SUBSCRIBE_REQUEST = 'WHATSAPP_SUBSCRIBE_REQUEST';
export const WHATSAPP_SUBSCRIBE_SUCCESS = 'WHATSAPP_SUBSCRIBE_SUCCESS';
export const WHATSAPP_SUBSCRIBE_ERROR = 'WHATSAPP_SUBSCRIBE_ERROR';

// WHATSAPP UNSUBSCRIBE
export const WHATSAPP_UNSUBSCRIBE_REQUEST = 'WHATSAPP_UNSUBSCRIBE_REQUEST';
export const WHATSAPP_UNSUBSCRIBE_SUCCESS = 'WHATSAPP_UNSUBSCRIBE_SUCCESS';
export const WHATSAPP_UNSUBSCRIBE_ERROR = 'WHATSAPP_UNSUBSCRIBE_ERROR';

// PROMO BANNER EVENTS
export const SIGN_UP_TODAY_BANNER_BUTTON_CLICKED = 'SIGN_UP_TODAY_BANNER_BUTTON_CLICKED';
