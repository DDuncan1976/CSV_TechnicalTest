using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CSV_TechnicalTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Application Description";
            //@ViewBag.CSVContent = List<int>;

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Author Details:";

            return View();
        }

        public ActionResult Application()
        {
            ViewBag.Message = "CSV Application:";
            return View();
        }
    }
}