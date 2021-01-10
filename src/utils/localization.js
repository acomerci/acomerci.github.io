import * as path from 'path';
import LocalizedStrings from 'react-localization';

let context = require.context('../assets/i18n', false);
let files = {};

context.keys().forEach((filename) => {
  if (filename.endsWith('.json')) {
    const locale = path.basename(filename, '.json');
    const fileContext = context(filename);
    files[locale] = fileContext;
  }
});

const Locale = new LocalizedStrings(files);
export default Locale;
