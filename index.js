/**
 * @param {number} a
 * @param {number} b
 * @returns number
 */
export const add = (a, b) => a + b;

export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  fetch: (request) => {
    const url = new URL(request.url);
    if (url.pathname === "/add") {
      const a = url.searchParams.get("a");
      const b = url.searchParams.get("b");
      console.log({ a, b });
      return new Response(add(Number(a), Number(b)));
    }
  },
};
