export class Motor {
  constructor(propulsionTo, historyInstance) {
    let status = "off"
    let lastChange = null;
    let history = historyInstance;

    this.getStatus = () => status;
    
    let setStatus = (newStatus) => {
      if (status !== newStatus) {
        let newChange = { propulsionTo, status: newStatus };
        if (!lastChange || JSON.stringify(newChange) !== JSON.stringify(lastChange)) {
          history.addChange(newChange);
          lastChange = newChange;
        }
        status = newStatus;
      }
    };

    this.turnOn = () => setStatus("on");
    this.turnOff = () => setStatus("off");
    
    this.getHistory = () => history.getFullState();
  }export class Motor {
    constructor(propulsionTo, historyInstance) {
      let status = "off"
      let lastChange = null;
      let history = historyInstance;
  
      this.getStatus = () => status;
      
      let setStatus = (newStatus) => {
        if (status !== newStatus) {
          let newChange = { propulsionTo, status: newStatus };
          if (!lastChange || JSON.stringify(newChange) !== JSON.stringify(lastChange)) {
            history.addChange(newChange);
            lastChange = newChange;
          }
          status = newStatus;
        }
      };
  
      this.turnOn = () => setStatus("on");
      this.turnOff = () => setStatus("off");
      
      this.getHistory = () => history.getFullState();
    }
  }
  
  export class History {
    constructor() {
      let changes = [];
  
      this.addChange = (change) => changes.push(change);
  
      this.getFullState = () => changes;
    }
  }
  

export class History {
  constructor() {
    let changes = [];

    this.addChange = (change) => changes.push(change);

    this.getFullState = () => changes;
  }
}

