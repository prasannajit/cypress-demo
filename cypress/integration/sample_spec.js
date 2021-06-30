
describe("MCA ROI tests",()=>{
    describe("Home page test",()=>{
        const login = ()=>{
            cy.visit('https://secure.tesco.ie/register/?from=https://secure.tesco.ie/clubcard/myaccount/home/home');
            cy.get('#loginID').type('');
            cy.get('#password').type('');
            cy.get("#signinButton input").click();
        };
        it('Login and land on home page', () => {
            login();
          })
    });
})