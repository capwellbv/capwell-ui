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
import CapSearchAbleSelect from '../../src/components/CapSearchAbleSelect';
import CapRadio from '../../src/components/CapRadio';
import CapDialog from '../../src/components/CapRadio';

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
	Vue.component('CapSearchAbleSelect', CapSearchAbleSelect);
	Vue.component('CapRadio', CapRadio);
	Vue.component('CapDialog', CapDialog);
};
