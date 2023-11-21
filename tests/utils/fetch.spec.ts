import { fetchData } from "@/app/utils/fetch";

const unmockedFetch = global.fetch

describe('Fetch Utils', () => {
  describe('fetchData', () => {
    afterEach(() => {
      global.fetch = unmockedFetch
    });
  
    describe('when no url is provided', () =>  {
      it('will return undefined', async () => {
        const response = await fetchData({
          url: "",
          tags: []
        })
        expect(response).toBeUndefined()
      })
    })
  
    describe('when a url is provided', () => {
      describe('when the response returns with an error', () => {
        it('will throw an error', async () => {
          global.fetch = () => Promise.reject('418 I\'m a teapot')
          try {
            await fetchData({
              url: 'https://pm25.lass-net.org/API-1.0.0/project/foobar/latest/',
              tags: [],
            })
          } catch (e) {
            expect(e).toEqual('418 I\'m a teapot')
          };
        })
      });
  
      describe('when the response returns with expected data', () => {
        it('will return the body of the data', async() => {
          const expectedResult = {
            ok: true,
            json: () => Promise.resolve({ foo: 'bar' })
          }
          global.fetch = jest.fn(() =>
            Promise.resolve(expectedResult)
          ) as jest.Mock
          expect(await fetchData({
            url: 'https://pm25.lass-net.org/API-1.0.0/project/all/',
            tags: [],
          })).toEqual(expectedResult)
        });
      });
    });
  });
});