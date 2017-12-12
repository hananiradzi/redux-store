export class Store {
  private subscriber: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any};

  constructor(reducers={},initialState={}){
    this.state = initialState;
    this.reducers = reducers;
  }

  get value(){
    return this.state;
  }

  dispatch(action){
    this.state = this.reduce(this.state,action);
  }

  private reduce(state,action){
    const newState = {};
    for(const prop in this.reducers){
        
    }
    return newState;
  }
}
