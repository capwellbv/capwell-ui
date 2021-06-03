# Tabs

### Usage

<demo-tabs></demo-tabs>

::: details Preview the code
```vue
<template>
  <cap-tabs :footer="false">
    <cap-tab-pane name="Tab one" :selected="true">
      <span>this is tab one</span>
    </cap-tab-pane>
    <cap-tab-pane name="Tab two">
      <span>this is tab two</span>
    </cap-tab-pane>
    <cap-tab-pane name="Tab three">
      <span>this is tab three</span>
    </cap-tab-pane>
  </cap-tabs>
</template>
```
:::

### Form wizard example

<demo-step-wizard ></demo-step-wizard>

::: tip
For source code please see example in modals section.
:::


### Options

| Option           | Type's  |  Default |                                                    Description |
| ---------------- | :-----: | -------: | -------------------------------------------------------------: |
| header           | Boolean |     true | Show tabs name as header, can be be changed with v-slot:header |
| footer           | Boolean |     true |              Show footer, can be be changed with v-slot:footer |
| nextButtonText   | String  |   'Next' |                                               Next button text |
| prevButtonText   | String  |   'Back' |                                           Previous button text |
| finishButtonText | String  | 'Finish' |                                             Submit button text |

### Events

| Event           |                 Params                  |                         Description |
| --------------- | :-------------------------------------: | ----------------------------------: |
| @onNextStep     |                  none                   |     Emits on switching to next tab. |
| @onPreviousStep |                  none                   | Emits on switching to previous tab. |
| @validateTab    | '{tabIndex: Number, eventName: String}' |                Emits on tab change. |
| @onComplete     |                   ''                    |       Emits on finish button click. |
