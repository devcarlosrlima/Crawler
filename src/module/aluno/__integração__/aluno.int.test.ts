import * as request from 'supertest';

describe ('Int - Aluno Suite', () => {
    it('##GET /aluno', async () => {
        const response = await request('http://localhost:8080')
            .get('/aluno/')


        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body.data).toHaveLength(3)
    })

    it('## POST /aluno', async () => {
        const response = await request('http://localhost:8080')
            .post('/aluno/')
            .send({
               " nome": 'Karol',
                "cpf": 123456789
            })


        expect(response.status).toBe(201)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body.data).toHaveLength(1)
    })
})