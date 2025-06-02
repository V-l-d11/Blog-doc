1. Create new instance of class (component class) in Before Each
2. Moke dependencese (Services)
3. new Component(dilogServiceMoc)
4. write test in describe

describe('Setup component', ()=>{
describe('ngOnInit', ()=>{

it('should call generateWorker with this.worker', ()=>{
const generateWrite=jest.spyOn(fixture, 'generateWorkerForm');
const worket:WorkerModel={
id:'worker1',
name:"Travis Barker"
} as WorkerModel;
fixture.worker=worker;
fixture.ngOnInit();
expext(generateWrite).toBeCallWidth(worker)
})

    })

})
