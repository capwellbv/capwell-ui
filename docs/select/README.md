#  Select

## Usage

<demo-select></demo-select>

::: details Preview the code

```vue
<template>
	<div>
		<cap-select
			v-model="selectdValue"
			:items="items"
			placeholder="Search skills"
			label="Search skills"
		>
		</cap-select>
	</div>
</template>

<script>
import { CapSelect } from "capwell-ui";
export default {
  components: {CapSelect},
  data() {
    return: {
      selectdValue: '',
			items: [
      'Dot NET ontwikkelaars',
      'Biztalk Consultants',
      'Ruby On Rails Developers',
      'Javascript Specialisten',
      'Vue Specialistens',
		  ],
    }
  }
};
</script>
```

:::

## Options

| Option        | Type's        | Default      | Description                 |
| ------------- |:----:| ---------------:| ----------------------------------------------------:|
| options     | Array  | ''              | Select options to show in dropdown.                  |
| placeholder | String | 'Select option' | Select placeholder                                   |
| label       | String | ''              | Toggling label display inside select for mobile size |

## Events
| Event          | Params  | Description                   |
| --------------- |:-------:| ----------------------------:|
| @change         | String  | Emits on value select.       |