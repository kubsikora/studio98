import { createI18n } from 'vue-i18n';
import { boot } from 'quasar/wrappers';

import messages from 'src/i18n';

const i18n = createI18n({
  locale: 'pl-PL',
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
