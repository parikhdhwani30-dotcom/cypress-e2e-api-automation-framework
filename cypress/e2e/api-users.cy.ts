describe('ReqRes REST API Automation Suite with Cypress', () => {
  const apiBase = 'https://reqres.in/api/users';

  it('API-01 - GET /users should return list of users with 200 OK', () => {
    cy.request({
      method: 'GET',
      url: `${apiBase}?page=2`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('page', 2);
      expect(response.body.data).to.be.an('array').and.not.be.empty;
      expect(response.body.data[0]).to.have.property('email');
    });
  });

  it('API-02 - POST /users should create user and return 201 Created', () => {
    const payload = {
      name: 'Dhwani Parikh',
      job: 'Senior QA Automation Engineer',
    };

    cy.request({
      method: 'POST',
      url: apiBase,
      body: payload,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', payload.name);
      expect(response.body).to.have.property('job', payload.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('API-03 - DELETE /users/2 should delete user and return 204 No Content', () => {
    cy.request({
      method: 'DELETE',
      url: `${apiBase}/2`,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});

