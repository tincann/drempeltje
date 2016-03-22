using System.Web.Http;

namespace Drempeltje.Web.Controllers.Webshop
{
    public class ProductSubscriptionsController : WebshopController
    {
        [HttpGet]
        [Route("productsubscriptions/{productId}")]
        public IHttpActionResult Get(int productId)
        {
            return Ok(99);
        }
    }
}