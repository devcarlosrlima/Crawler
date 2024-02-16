import { Aluno } from '../aluno.model';
import { KnexService } from '../../../service/knex';

describe("Unit - Aluno model Suite", () => {
    it('deve retornar valores do modelo', async () => {
        let KnexServiceMock:any

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValue([])
            }
        }

        KnexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new Aluno(KnexServiceMock);
        const response = await aluno.getAll();
        expect(response).toBeTruthy();
    })

    it('deve salvar um aluno no modelo', async () => {
        let KnexServiceMock:any

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValue([2])
            }
        }

        KnexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new Aluno(KnexServiceMock);
        const response = await aluno.store({
            nome: 'carlos',
            cpf: 123456789
        });
        expect(response).toBeTruthy();
        expect(response).toEqual([2])
    })
})