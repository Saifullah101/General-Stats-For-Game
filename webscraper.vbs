
Dim ie, frm, result
Set Connection = CreateObject("ADODB.Connection")
Set Recordset = CreateObject("ADODB.Recordset")
ConnectString = "Driver={MySQL ODBC 3.51 Driver};Server=localhost;PORT=1051;Database=mydb;User=root;Password=Wf129dl17"
Connection.Open ConnectString
Set ie = CreateObject("InternetExplorer.Application")
ie.Visible = True
ie.Navigate "mafiamatrix.com"
Do Until ie.ReadyState = 4 
    WScript.Sleep 5000
loop
sql = "DELETE FROM `data`"
Connection.Execute(sql)

 result = (ie.document.getElementById("general-stats").innerText)

sql = "INSERT INTO `data` (post) VALUES ('" & result & "')"
Connection.Execute(sql)
ie.Quit











