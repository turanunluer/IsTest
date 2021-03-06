using IsTest.UI.Attribute;
using IsTest.UI.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace IsTest.UI.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CustomerInsert(CustomerVM vm)
        {
           
            if (ModelState.IsValid)
            {
                if ((List<CustomerVM>)Session["SessionContext"] == null)
                {
                    List<CustomerVM> ctl = new List<CustomerVM>();
                    ctl.Add(vm);

                    SessionContext sc = new SessionContext();
                    sc.UserList = ctl;

                    Session["SessionContext"] = sc.UserList;
                    return Json(true, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    List<CustomerVM> vm2 = (List<CustomerVM>)Session["SessionContext"];
                    vm2.Add(vm);
                    Session["SessionContext"] = vm2;
                    return Json(true, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
        }

        [Auth]
        public ActionResult CustomerList()
        {
          
            List<CustomerVM> vm = new List<CustomerVM>();
            vm = (List<CustomerVM>)Session["SessionContext"];
            return View(vm);
        }
    }
}