function generatePreview() {
  const name = document.getElementById("name").value;
  const branchcode = document.getElementById("branchcode").value;
  const adcode = document.getElementById("adcode").value;
  const joiningdate = document.getElementById("joiningdate").value;
  const designation = document.getElementById("designation").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("type").value;
  const address = document.getElementById("address").value;
  const photoInput = document.getElementById("photo");
  const logoInput = document.getElementById("logo");

  let photoURL = photoInput.files[0]
    ? URL.createObjectURL(photoInput.files[0])
    : "https://via.placeholder.com/80";

  let logoURL = logoInput.files[0]
    ? URL.createObjectURL(logoInput.files[0])
    : "https://via.placeholder.com/60";

  const templatesDiv = document.getElementById("templates");
  templatesDiv.innerHTML = ""; // clear old previews

  let employeeTemplates = "";
  let studentTemplates = "";

  // ---------------- EMPLOYEE TEMPLATE 1 ----------------
employeeTemplates += `
    <div class="col-md-6 text-center">
      <div id="emp-front" style="width: 250px; height: 400px; border-radius: 12px; overflow: hidden; border: 2px solid #004085; background: linear-gradient(to bottom, #0056b3, #007bff); color: #fff; position: relative; padding: 10px;">
        
        <div style="text-align: center; margin-bottom: 10px;">
          <img src="${logoURL}" alt="Company Logo" style="height: 50px;">
        </div>

        <div style="background: #fff; border-radius: 8px; padding: 10px; margin: 10px auto; width: 120px; height: 140px; display:flex; align-items:center; justify-content:center;">
          <img src="${photoURL}" alt="Employee Photo" style="width: 100%; height: 100%; border-radius: 6px; object-fit: cover;">
        </div>

        <h5 style="margin-top: 10px; font-weight: bold;">${name}</h5>
        <p style="margin: 0; font-size: 14px;">${designation}</p>
        
        <div style="background: #003366; margin-top: 15px; padding: 8px; border-radius: 6px; text-align: left; font-size: 13px;">
          <p style="margin: 2px 0;"><b>Email:</b> ${email}</p>
          <p style="margin: 2px 0;"><b>Phone:</b> ${phone}</p>
          <p style="margin: 2px 0;"><b>Employee ID:</b> EMP-${Math.floor(Math.random()*9000+1000)}</p>
        </div>
      </div>
      <p><b>Front</b></p>
    </div>

    <div class="col-md-6 text-center">
      <div id="emp-back" style="width: 250px; height: 400px; border-radius: 12px; overflow: hidden; border: 2px solid #004085; background: #f8f9fa; padding: 15px; text-align: center;">
        
        <h6 style="margin-bottom: 10px; color:#004085; font-weight: bold;">Company Policies</h6>
        <ul style="text-align: left; font-size: 12px; padding-left: 18px; color:#333;">
          <li>This card is property of the company.</li>
          <li>Carry it inside company premises at all times.</li>
          <li>If lost, report to HR immediately.</li>
          <li>Unauthorized use is strictly prohibited.</li>
        </ul>

        <div style="margin-top: 30px; text-align: center;">
          <p style="font-size: 13px; margin-bottom: 5px;">Authorized Signatory</p>
          <div style="width: 120px; height: 35px; border-bottom: 1px solid #000; margin: 0 auto;"></div>
        </div>

        <div style="margin-top: 20px; font-size: 11px; color: #555;">
          <p>Company Address, City, State</p>
          <p>www.companywebsite.com</p>
        </div>
      </div>
      <p><b>Back</b></p>
      <button class="btn btn-success mt-2" onclick="downloadPDF('emp-front','emp-back')">Download PDF</button>
    </div>
  `;
 // ---------------- EMPLOYEE TEMPLATE 2 ----------------
employeeTemplates += `
  <div class="col-md-6 text-center">
    <!-- FRONT -->
    <div id="emp-front-2" style="width:250px; height:400px; border-radius:12px; 
      background:linear-gradient(135deg, #0077b6 0%, #ffffff 50%, #0077b6 100%); 
      color:#333; padding:15px; position:relative; text-align:center; overflow:hidden;">
      
      <!-- Logo Top Left -->
      <div style="position:absolute; top:10px; left:10px;">
        <img src="${logoURL}" alt="Logo" style="height:40px;">
      </div>

      <!-- Profile Photo -->
      <div style="background:#ffffffcc; border-radius:10px; padding:6px; margin:60px auto 0 auto; width:110px; height:130px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 6px rgba(0,0,0,0.15);">
        <img src="${photoURL}" alt="Photo" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">
      </div>

      <!-- Name + Designation -->
      <h5 style="margin-top:12px; font-weight:bold; color:#003566;">${name}</h5>
      <p style="margin:0; font-size:14px;">${designation}</p>

      <!-- Info Section -->
      <div style="margin-top:5px;margin-bottom: .5rem;line-height:7px; text-align:left; font-size:13px; background:#ffffffcc; padding:8px; border-radius:8px;">
        <p><b>Branch Code:</b> ${branchcode}</p>
        <p><b>AD Code:</b> ${adcode}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Join:</b> ${joiningdate}</p>
      </div>
    </div>
    <p><b>Front</b></p>
  </div>

  <div class="col-md-6 text-center">
    <!-- BACK -->
    <div id="emp-back-2" style="width:250px; height:400px; border-radius:12px; 
      background:linear-gradient(135deg, #0077b6 0%, #ffffff 50%, #0077b6 100%); 
      padding:20px; text-align:center; position:relative; color:#333; overflow:hidden;">
      
      <!-- Logo Top Left -->
      <div style="position:absolute; top:10px; left:10px;">
        <img src="${logoURL}" alt="Logo" style="height:35px;">
      </div>

      <h6 style="color:#003566; font-weight:bold; margin-top:50px;">TEEMS & CONDITIONS</h6>
      <ul style="text-align:left; font-size:12px; padding-left:18px;">
        <li>Identification: Carry the ID card at all times during Working hours for identification Purposes.</li>
        <li style="margin-top:5px;">Authorized Use: The ID card is strictly for official use and should not shared or used for unauthorized purposes.</li>
      </ul>

      <div style="margin-top:50px;">
        <h6 style="font-size:13px;">OFFICE ADDRESS</h6>
      </div>
      <div style="margin-top:10px; font-size:11px; color:#222;">
        <p>${address}</p>
      </div>
    </div>
    <p><b>Back</b></p>
    <button class="btn btn-success mt-2" onclick="downloadPDF('emp-front-2','emp-back-2')">Download PDF</button>
  </div>
`;


// ---------------- EMPLOYEE TEMPLATE 3 ----------------
employeeTemplates += `
  <div class="col-md-6 text-center">
    <div id="emp-front-3" style="width:250px; height:400px; border-radius:12px; overflow:hidden; background:#1a1a2e; color:#fff; padding:15px; text-align:center;">
      <div style="margin-bottom:10px;">
        <img src="${logoURL}" alt="Logo" style="height:50px;">
      </div>
      <div style="border:2px solid #fff; border-radius:8px; margin:10px auto; width:120px; height:140px; display:flex; align-items:center; justify-content:center; background:#16213e;">
        <img src="${photoURL}" alt="Photo" style="width:100%; height:100%; border-radius:6px; object-fit:cover;">
      </div>
      <h5 style="margin-top:10px; font-weight:bold; color:#00adb5;">${name}</h5>
      <p style="margin:0; font-size:14px;">${designation}</p>
      <div style="margin-top:15px; text-align:left; font-size:13px;">
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Employee ID:</b> EMP-${Math.floor(Math.random()*9000+1000)}</p>
      </div>
    </div>
    <p><b>Front</b></p>
  </div>

  <div class="col-md-6 text-center">
    <div id="emp-back-3" style="width:250px; height:400px; border-radius:12px; background:#16213e; color:#eee; padding:20px; text-align:center;">
      <h6 style="font-weight:bold; color:#00adb5;">Important Notice</h6>
      <ul style="text-align:left; font-size:12px; padding-left:18px;">
        <li>This ID must not be shared.</li>
        <li>Always wear inside office premises.</li>
        <li>Return to HR on resignation.</li>
      </ul>
      <div style="margin-top:40px;">
        <p style="font-size:13px;">Authorized Signatory</p>
        <div style="width:120px; height:35px; border-bottom:1px solid #fff; margin:0 auto;"></div>
      </div>
      <div style="margin-top:25px; font-size:11px;">
        <p>Corporate HQ, Business Tower</p>
        <p>www.company.com</p>
      </div>
    </div>
    <p><b>Back</b></p>
    <button class="btn btn-success mt-2" onclick="downloadPDF('emp-front-3','emp-back-3')">Download PDF</button>
  </div>
`;
// ---------------- EMPLOYEE TEMPLATE 4 ----------------
employeeTemplates += `
  <div class="col-md-6 text-center">
    <div id="emp-front-4" style="width:250px; height:400px; border-radius:12px; background:linear-gradient(135deg,#0061ff,#60efff); color:#fff; padding:15px; text-align:center; position:relative;">
      <div style="position:absolute; top:0; left:0; width:100%; height:80px; background:#003f88; border-bottom-right-radius:50%; border-bottom-left-radius:50%;"></div>
      <div style="margin-top:20px;">
        <img src="${logoURL}" alt="Logo" style="height:50px;">
      </div>
      <div style="background:#fff; border-radius:50%; margin:20px auto; width:110px; height:110px; overflow:hidden; border:3px solid #003f88;">
        <img src="${photoURL}" alt="Photo" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <h5 style="margin-top:8px; font-weight:bold;">${name}</h5>
      <p style="margin:0; font-size:14px;">${designation}</p>
      <div style="margin-top:15px; text-align:left; font-size:13px; background:rgba(255,255,255,0.1); padding:8px; border-radius:6px;">
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>ID:</b> EMP-${Math.floor(Math.random()*9000+1000)}</p>
      </div>
    </div>
    <p><b>Front</b></p>
  </div>

  <div class="col-md-6 text-center">
    <div id="emp-back-4" style="width:250px; height:400px; border-radius:12px; background:#003f88; color:#fff; padding:20px; text-align:center;">
      <h6 style="font-weight:bold;">Company Guidelines</h6>
      <p style="font-size:12px; margin:10px 0;">This card is property of the company. Report any misuse immediately.</p>
      <div style="margin-top:40px;">
        <p style="font-size:13px;">Authorized Signatory</p>
        <div style="width:120px; height:35px; border-bottom:1px solid #fff; margin:0 auto;"></div>
      </div>
      <div style="margin-top:25px; font-size:11px;">
        <p>Corporate Office, City</p>
        <p>www.company.com</p>
      </div>
    </div>
    <p><b>Back</b></p>
    <button class="btn btn-success mt-2" onclick="downloadPDF('emp-front-4','emp-back-4')">Download PDF</button>
  </div>
`;
// ---------------- EMPLOYEE TEMPLATE 5 ----------------
employeeTemplates += `
  <div class="col-md-6 text-center">
    <div id="emp-front-5" style="width:250px; height:400px; border-radius:14px; overflow:hidden; background:linear-gradient(135deg,#1e3c72,#2a5298,#6a11cb,#2575fc); color:#fff; padding:15px; text-align:center; position:relative;">
      
      <div style="margin-top:5px;">
        <img src="${logoURL}" alt="Logo" style="height:50px;">
      </div>

      <div style="background:#fff; border-radius:12px; margin:20px auto; width:120px; height:140px; overflow:hidden; border:3px solid #1e3c72;">
        <img src="${photoURL}" alt="Photo" style="width:100%; height:100%; object-fit:cover;">
      </div>

      <h5 style="margin-top:8px; font-weight:bold; font-size:16px;">${name}</h5>
      <p style="margin:0; font-size:13px;">${designation}</p>

      <div style="margin-top:15px; text-align:left; font-size:12px; background:rgba(0,0,0,0.2); padding:8px; border-radius:6px;">
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>ID:</b> EMP-${Math.floor(Math.random()*9000+1000)}</p>
      </div>
    </div>
    <p><b>Front</b></p>
  </div>

  <div class="col-md-6 text-center">
    <div id="emp-back-5" style="width:250px; height:400px; border-radius:14px; background:linear-gradient(225deg,#6a11cb,#2575fc,#1e3c72); color:#fff; padding:20px; text-align:center;">
      
      <h6 style="font-weight:bold; margin-bottom:10px;">Company Guidelines</h6>
      <ul style="text-align:left; font-size:12px; padding-left:18px;">
        <li>Must be displayed at all times.</li>
        <li>Not transferable.</li>
        <li>Return to HR upon exit.</li>
      </ul>

      <div style="margin-top:40px;">
        <p style="font-size:13px;">Authorized Signatory</p>
        <div style="width:120px; height:35px; border-bottom:1px solid #fff; margin:0 auto;"></div>
      </div>

      <div style="margin-top:25px; font-size:11px;">
        <p>123 Business Park, City</p>
        <p>www.company.com</p>
      </div>
    </div>
    <p><b>Back</b></p>
    <button class="btn btn-success mt-2" onclick="downloadPDF('emp-front-5','emp-back-5')">Download PDF</button>
  </div>
`;
// ---------------- EMPLOYEE TEMPLATE 6 ----------------
employeeTemplates += `
  <div class="col-md-6 text-center">
    <div id="emp-front-6" style="width:250px; height:400px; border-radius:14px; overflow:hidden; background:linear-gradient(135deg,#11998e,#38ef7d,#ff512f,#dd2476); color:#fff; padding:15px; text-align:center;">
      
      <div style="margin-top:5px;">
        <img src="${logoURL}" alt="Logo" style="height:50px;">
      </div>

      <div style="background:#fff; border-radius:50%; margin:20px auto; width:120px; height:120px; overflow:hidden; border:3px solid #11998e;">
        <img src="${photoURL}" alt="Photo" style="width:100%; height:100%; object-fit:cover;">
      </div>

      <h5 style="margin-top:8px; font-weight:bold; font-size:16px;">${name}</h5>
      <p style="margin:0; font-size:13px;">${designation}</p>

      <div style="margin-top:15px; text-align:left; font-size:12px; background:rgba(255,255,255,0.15); padding:8px; border-radius:6px;">
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>ID:</b> EMP-${Math.floor(Math.random()*9000+1000)}</p>
      </div>
    </div>
    <p><b>Front</b></p>
  </div>

  <div class="col-md-6 text-center">
    <div id="emp-back-6" style="width:250px; height:400px; border-radius:14px; background:linear-gradient(225deg,#ff512f,#dd2476,#11998e,#38ef7d); color:#fff; padding:20px; text-align:center;">
      
      <h6 style="font-weight:bold; margin-bottom:10px;">Important Notice</h6>
      <p style="font-size:12px; margin:8px 0;">This card remains company property and must be surrendered on request.</p>

      <div style="margin-top:40px;">
        <p style="font-size:13px;">Authorized Signatory</p>
        <div style="width:120px; height:35px; border-bottom:1px solid #fff; margin:0 auto;"></div>
      </div>

      <div style="margin-top:25px; font-size:11px;">
        <p>Global HQ, Innovation Tower</p>
        <p>www.company.com</p>
      </div>
    </div>
    <p><b>Back</b></p>
    <button class="btn btn-success mt-2" onclick="downloadPDF('emp-front-6','emp-back-6')">Download PDF</button>
  </div>
`;

  // ---------------- STUDENT TEMPLATE 1 ----------------
  studentTemplates += `
  <div class="col-md-6 text-center">
    <!-- FRONT -->
    <div class="icard" id="stu-front-1" 
         style="width:250px; height:415px; border-radius:12px; overflow:hidden; 
                background:linear-gradient(135deg, #fbedfc 0%, #ffffff 100%);
                box-shadow:0 4px 8px rgba(0,0,0,0.2); margin:auto;">

      <!-- Header -->
      <div style="background:#023e8a; color:white; padding:8px; font-weight:bold; font-size:14px;">
        Student ID Card
      </div>

      <!-- Logo -->
      <img src="${logoURL}" 
           style="width:140px; height:100px; margin:-11px auto 0; display:block;" />

      <!-- Photo -->
      <img src="${photoURL}" 
           style="width:90px; height:100px; border-radius:8px; border:2px solid #023e8a; 
                  margin:1px auto; display:block; object-fit:cover;" />

      <!-- Details -->
      <div style="padding:10px; text-align:left; font-size:13px; line-height:11px;">
        <h5 style="text-align:center; font-weight:bold; color:#023e8a; margin-bottom:6px;">
          ${name || "Student Name"}
        </h5>
        <p><b>Reg No:</b> ${adcode || "Reg No"}</p>
        <p><b>Phone:</b> <span style="text-decoration:none; color:inherit;">${phone || "1234567890"}</span></p>
        <p><b>Batch Time:</b> ${designation || "Batch Time"}</p>
        <p><b>Joining Date:</b> ${joiningdate || "Joining Date"}</p>
      </div>

      <!-- Footer -->
      <div style="background:#023e8a; color:white; padding:6px; font-size:12px;">
        Central Library Ara
      </div>
    </div>
    <p class="mt-2"><b>Front</b></p>
  </div>

  <div class="col-md-6 text-center">
    <!-- BACK -->
    <div class="icard-back" id="stu-back-1" 
         style="width:250px; height:415px; border-radius:12px; overflow:hidden; 
                background:linear-gradient(135deg, #fbedfc 0%, #ffffff 100%);
                display:flex; flex-direction:column; justify-content:center; align-items:center;">

      <h6 style="font-weight:bold; color:#023e8a; margin-top:30px;">Library Rules</h6>
      <ul style="text-align:left; font-size:12px; list-style:none; padding:0 20px; line-height: 25px;">
        <li>📰 Always carry your ID card.</li>
        <li>🕒 Please Follow Your Batch time.</li>
        <li>📵 Keep phones on silent mode.</li>
        <li>📕 Handle books and equipment with care.</li>
      </ul>

      <img src="${logoURL}" 
           style="width:200px; height:160px; object-fit:contain; display:block;" />

      <p style="margin-top:auto; font-size:11px; color:#555;">Issued by Central Library</p>
    </div>
    <p class="mt-2"><b>Back</b></p>
    <button class="btn btn-success mt-2" onclick="downloadPDF('stu-front-1','stu-back-1')">
      Download PDF
    </button>
  </div>
`;

  // ---------------- STUDENT TEMPLATE 2 ----------------
//    studentTemplates += `
//     <div class="col-md-6 text-center">
//       <div class="icard" id="stu-front-2" style="background:#ffc107; padding:10px;">
//         <h5>${name || "Student Name"}</h5>
//         <p>Class: ${designation || "Class / Grade"}</p>
//         <img src="${photoURL}" class="photo" style="margin:10px auto;">
//         <p>Email: ${email || "student@email.com"}</p>
//         <p>Phone: ${phone || "1234567890"}</p>
//       </div>
//       <p><b>Front</b></p>
//     </div>
//     <div class="col-md-6 text-center">
//       <div class="icard-back" id="stu-back-2" style="background:#ff9800; color:#fff; text-align:center;">
//         <p>Student Guidelines</p>
//       </div>
//       <p><b>Back</b></p>
//       <button class="btn btn-success mt-2" onclick="downloadPDF('stu-front-2','stu-back-2')">Download PDF</button>
//     </div>
//   `; 

  // ✅ Now show only selected type templates
  if (type === "employee") {
    templatesDiv.innerHTML = employeeTemplates;
  } else if (type === "student") {
    templatesDiv.innerHTML = studentTemplates;
  }
}
// 🔽 PDF Generator Function
function downloadPDF(frontId, backId) {
  const { jsPDF } = window.jspdf;
  const front = document.getElementById(frontId);
  const back = document.getElementById(backId);

  if (!front || !back) {
    alert("Please generate a preview first!");
    return;
  }

  // Standard ID card size (CR80) → 54mm x 86mm (portrait)
  const cardWidth = 54;
  const cardHeight = 86;

  const pdf = new jsPDF("p", "mm", [cardWidth, cardHeight]);

  html2canvas(front, { scale: 2 }).then(canvas1 => {
    const img1 = canvas1.toDataURL("image/png");

    // Fit front image inside ID card size
    pdf.addImage(img1, "PNG", 0, 0, cardWidth, cardHeight);

    pdf.addPage([cardWidth, cardHeight]);

    html2canvas(back, { scale: 2 }).then(canvas2 => {
      const img2 = canvas2.toDataURL("image/png");

      // Fit back image inside ID card size
      pdf.addImage(img2, "PNG", 0, 0, cardWidth, cardHeight);
      // Get the name input value
      const name = document.getElementById("name").value || "iCard";
      pdf.save(`${name}_iCard.pdf`);
    });
  });
}
