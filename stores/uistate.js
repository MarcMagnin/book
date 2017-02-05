import { observable, autorun } from 'mobx';


class UiState  {
  @observable selectedChart= undefined;
  @observable isModalVisible = false;
 constructor() {

   //   autorun(() => console.log( this.selectedChart + "Chart changed from UiState!!" ));
  }
}

const uiState = new UiState();
export default uiState;