import CapModal from '../../src/components/CapModal';
import CapButton from '../../src/components/CapButton';
import CapTitle from '../../src/components/CapTitle';
import CapText from '../../src/components/CapText';
import CapCard from '../../src/components/CapCard';
import CapBox from '../../src/components/CapBox';
import CapInput from '../../src/components/CapInput';
import CapSelect from '../../src/components/CapSelect';
import CapMultiSelect from '../../src/components/CapMultiSelect';
import CapDropdown from '../../src/components/CapDropdown';
import CapDropdownItem from '../../src/components/CapDropdownItem';
import CapLink from '../../src/components/CapLink';
import CapSearchDropdown from '../../src/components/CapSearchDropdown';
import CapMultiSearchDropdown from '../../src/components/CapMultiSearchDropdown';
import CapRadio from '../../src/components/CapRadio';
import CapDialog from '../../src/components/CapRadio';
import CapHeader from '../../src/components/CapHeader';
import CapFooter from '../../src/components/CapFooter';
import CapSlider from '../../src/components/CapSlider';
import CapForm from '../../src/components/CapForm';
import CapFormRow from '../../src/components/CapFormRow';
import CapTextarea from '../../src/components/CapTextarea';

import '../../src/css/index.scss'

export default ({
	Vue, // the version of Vue being used in the VuePress app
}) => {
	Vue.component('CapModal', CapModal);
	Vue.component('CapButton', CapButton);
	Vue.component('CapTitle', CapTitle);
	Vue.component('CapText', CapText);
	Vue.component('CapCard', CapCard);
	Vue.component('CapBox', CapBox);
	Vue.component('CapInput', CapInput);
	Vue.component('CapSelect', CapSelect);
	Vue.component('CapMultiSelect', CapMultiSelect);
	Vue.component('CapDropdown', CapDropdown);
	Vue.component('CapDropdownItem', CapDropdownItem);
	Vue.component('CapLink', CapLink);
	Vue.component('CapSearchDropdown', CapSearchDropdown);
	Vue.component('CapMultiSearchDropdown', CapMultiSearchDropdown);
	Vue.component('CapRadio', CapRadio);
	Vue.component('CapDialog', CapDialog);
	Vue.component('CapHeader', CapHeader);
	Vue.component('CapFooter', CapFooter);
	Vue.component('CapSlider', CapSlider);
	Vue.component('CapForm', CapForm);
	Vue.component('CapFormRow', CapFormRow);
	Vue.component('CapTextarea', CapTextarea);
};
