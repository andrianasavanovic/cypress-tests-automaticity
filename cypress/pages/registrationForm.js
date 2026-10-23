class RegistrationForm {
    //Elements
    form() {
        return cy.get('#customer-form');
    }

    field(name) {
        return this.form().find('input[name="${name}"]');
    }

    genderCheckbox(label) {
        return this.form().find('input[name="id_gender"]').paren().contains(label);
    }

    requiredCheckbox() {
        return this.form().find('input[type="checkbox"][required]')
    }

    submitButton(){
        return this.form().find('button[type="submit"]')
    }
    
    fieldError(name) {
        return this.field(name)
        .closest('.form-group')
        .find('.help-block, .invalid-feedback')
    }

    //Actions
    open() {
        cy.get('a[href*="controller=my-account"], a[href*="my-account"]')
        .filter(':visible')
        .first()
        .click();
        cy.get('.no-account a, a[data-link-action="display-register-form"]')
        .filter(':visible')
        .first()
        .click();
        this.form().should('be.visible');
        return this;
    }

    fillForm(user) {
        this.genderCheckbox(user.gender).click();
        this.type('firstname' , user.firstName);
        this.type('lastname', user.lastName);
        this.type('email', user.email);
        this.type('password', user.password);
        return this;
    }

    acceptRequired() {
        this.requiredCheckbox().check({force : true});
        return this;
    }

    submit() {
        this.submitButton().click();
        return this;
    }

    register(user){
        return this.fillForm(user).acceptRequired().submit();
    }

    type(name, value) {
        if(value) {
            this.field(name).clear().type(value, { log: name !== 'password'});
        } 
    }

    //Assert
    shouldStillBeOnForm() {
        this.form().should('be.visible');
        cy.get('a[href*="mylogout"]').should('not.exist');
        return this;
    }
}
export default new RegistrationForm();