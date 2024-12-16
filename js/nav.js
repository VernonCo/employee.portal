var navbar = ` 
    <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
            <a class="navbar-brand" href="index.html">
            <img height="100" width="200" src="./assets/VernonLogoplusIcon_4C.png" alt="The Vernon Company Employee Portal"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link active" href="employee-handbook.html">Employee Handbook</a></li>
                    <li class="nav-item"><a class="nav-link active" href="employee-benefits.html">Employee Benefits</a></li>
                    <li class="nav-item"><a class="nav-link active" href="covid-19.html">COVID-19</a></li>  
                </ul>
            </div>

            <div class="dropdown">
                <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Scholarship
                </a>
                <ul class="dropdown-menu">                      
                <li><a class="dropdown-item" target="_blank" href="https://www.vernoncompany.com/scholarship-information/">Scholarship Information</a></li>
                <li><a class="dropdown-item" target="_blank" href="https://www.vernoncompany.com/letter-from-william-f-vernon/">Letter From Bill</a></li>
                <li><a class="dropdown-item" target="_blank" href="https://www.vernoncompany.com/william-f-vernon-scholarship-program-application-request/">Application Form</a></li>
                </ul>
            </div>
            
            <div class="dropdown">
               <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Departments
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="credit-department.html">Credit (8312)</a></li>
                    <li><a class="dropdown-item" href="customer-service.html">Customer Service (8546)</a></li>
                    <li><a class="dropdown-item" href="orders.html">Orders (8238)</a></li>
                    <li><a class="dropdown-item" href="pre-sales.html">Pre-Sales (8542)</a></li>
                    <li><a class="dropdown-item" href="vernon-graphics.html">Vernon Graphics (8317)</a></li>
                </ul>
            </div>

           
            <div class="dropdown">
               <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    IT
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item"  target="_blank" href="https://oss.denovo-us.com/login"/>Denovo On Demand</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://denovo.service-now.com/support?id=customer_support_home"/>Denovo ServiceNow</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="http://192.168.98.60:8999/manage/logon;SMCONSOLE_SSID=Ww3yX-7k6fTJ7HSTAC2jJBAt6L3gsdF6l60z6GU0OKV65Yx98nag!-997271672"/>JDE Enterprise One Server Manager</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="http://10.1.1.180/NMC/vrmshRFkMYu5TGFnM4V1iw/logon.htm"/>APC</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://account.meraki.com/login"/>Meraki</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://login-us.mimecast.com/u/login/?gta=portal&tkn=undefined&link=%2Fadvanced%2Fmoderated-on-hold#/login"/>Mimecast</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://admin-16e786ab.duosecurity.com/login?next=%2F"/>DUO</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://na.myconnectwise.net/?usehttps=1&appredirect=?locale=en_US&session=new#XQAACAC2AAAAAAAAAAA9iIoG07$U9XZqpLgsNhRrwzVSVGsfyklexWXBlnQgHdxs4hB403vMVkwEZoaS$B_yD$NXobUyRAHBsiyBNlMDPqR8$apKuFzyejc5hd7ucEb_AoylchrKL5ZV0VCM2SrWlRisdaxCXnOpXthM7hF$vWq_ZqS_R__4y30A??ConnectWiseTodayDetail"/>ConnectWise PSA</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://home.connectwise.com"/>ConnectWise Home</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://cmd-vernon.screenconnect.com"/>ConnectWise Screenconnect</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://idmserver.itsupport247.net/openam/XUI/#login/&realm=/ITSUPPORT247DATASTORE&goto=/openam/cdcservlet?TARGET%3Dhttps://control.itsupport247.net:443/index.asp%26RequestID%3D397378F1C762D00DC02B7F89034E35750CDB25ED8C2FEE3FE141B5BDBFE0867A%26MajorVersion%3D1%26MinorVersion%3D0%26ProviderID%3Dhttps://control.itsupport247.net:443/amagent?Realm%253D/ITSUPPORT247DATASTORE%26IssueInstant%3D2024-04-15T15:42:29Z%26goto2%3Dhttp://control.itsupport247.net/?ampostpreserve%253D95471438-0308-c04e-836b-76814c61a852"/>ITSupport247</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://voice.nemr.net/login"/>NEMR Phone Administration</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://admin.rbbnconnect.com/portal/dZxa0z9x/gettingstarted"/>NEMR Ribbon Connect</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://signin.aws.amazon.com/oauth?response_type=code&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_us-east-2_914988d93afecb59&forceMobileLayout=0&forceMobileApp=0&code_challenge=hmPZGdGmZMlY_O-5hAYBKqOO0QVEDknrKmnfvIjWJ_I&code_challenge_method=SHA-256"/>AWS</a></li>                    
                    <li><a class="dropdown-item"  target="_blank" href="https://portal.azure.com/#home"/>Azure</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://entra.microsoft.com"/>Entra</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://github.com/VernonCo"/>GitHub</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://identity.webrootanywhere.com/v1/Account/login"/>Webroot</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://community.tenable.com/s/?language=en_US"/>Tenable</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://www.insight.com/insightweb/login"/>Insight</a></li>
                    <li><a class="dropdown-item"  target="_blank" href="https://mblogin.verizonwireless.com/account/business/login/unifiedlogin?goto=https%3A%2F%2Fmb.verizonwireless.com%2Fmbt%2Fsecure%2Findex%3FappName%3Desm&appGroup=VZW#/esm/dashboard"/>Verizon</a></li>                    
                    <li><a class="dropdown-item"  target="_blank" href="https://app.copysystemsinc.com/e-info/Gateway/Login"/>Copy Systems</a></li>
                </ul>
            </div>
        </div>
        
    </nav>
    
    `;

    // inserting navbar in beginning of body
    document.body.insertAdjacentHTML("afterbegin", navbar);