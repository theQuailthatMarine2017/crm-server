const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createaccounttoken } = require('./jwtoken');
const Admin = require('./models/Admins');
const Client = require('./models/Client');
const Events = require('./models/Calendar-Events');
const Receipts = require('./models/Receipts');
const Invoices = require('./models/Invoices');
const Settings = require('./models/Settings');
const Tasks = require('./models/Tasks');
var multer  = require('multer');
const fs = require('fs');
var path = require('path');
var upload = multer({ dest: 'uploads/receipts' });
var upload2 = multer({ dest: 'uploads/invoices'});
var nodemailer = require('nodemailer');
var http = require('http');
var smtpTransport = require('nodemailer-smtp-transport');
var io = require('socket.io');


const app = express()

app.use(express.json());

var server = http.createServer(app).listen(4500)

var io = require('socket.io')(server);


app.use(cors());

io.listen(server);



mongoose.connect( "mongodb://localhost:27017/FreelanceDB",
                 { useUnifiedTopology : true, useNewUrlParser: true, useCreateIndex: true },
                () => console.log(`connected to database status: ${mongoose.connection.readyState}`));




app.get('/api/freelancer-ke/videochat', async (req,res) => {

    io.sockets.on('connection', function (socket) {
        console.log('A client is connected!');
    });

});

app.post('/api/freelancer-ke/login', async (req,res) => {

    try {

            // check if user exists
            await Admin.find({ email : req.body.email},function(err, admin) {

                  if (err) {
                    return res.status(403).json({
                          title:"Admin Not found"
                        });
                  }

                  console.log(admin)

                  if(!admin) return res.status(404).json({
                    title: "error"
                  });

                  console.log("password" + req.body.password);
                  //check password match
                  //bcrypt.compare(req.body.password, admin[0].password, function(err, result) {

                      //if (err) return res.status(403).json({
                          //title:err
                        //});;

                      //if (result === true) {

                          //If Both Are Good User Exists Create Token

                          //const token = createaccounttoken(admin._id);

                          //console.log(token)

                          //res.status(200).json({
                              //title: 'Welcome ' + admin[0].fullnames.toUpperCase() + '!',
                              //token: token,
                              //admin
                          //});

                      //} else {

                        //res.status(403).json({
                          //title:"Wrong Password"
                        //});
                      //}


                  //});


            });


        } catch(error) {

            res.send(error);
        }

});

// create super-admin

app.post('/api/freelancer-ke/create-admin', async (req,res) => {

    console.log(req)

    try {

         // Prepare to Hash Password
        //const salt = await bcrypt.genSalt(10);
        //const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //New Client Created
        const admin = new Admin({

            email: req.body.email,
            fullnames: req.body.fullnames,
            password: hashedPassword

        });

        console.log(admin)

        const newadmin = await admin.save();

        console.log("new" + newadmin)

        const token = createaccounttoken(newadmin._id);

        console.log(token)

        res.status(200).json({
            title: 'created',
            token: token,
            newadmin
        });

    } catch (err) {

        res.send(err);
    }
});

// Register New Member Account

app.post('/api/freelancer-ke/create-member', async (req,res) => {

  console.log(req.body)

  try {

         // Prepare to Hash Password
        //const salt = await bcrypt.genSalt(10);
        //const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //New Client Created
      const member = new Member({

          email: req.body.email,
          name: req.body.fullnames,
          role: req.body.role,
          projects:req.body.projects,
          password: hashedPassword

        });

        const newmember = await member.save();

        console.log("new" + newmember)

        res.status(200).json({
            title: 'created',
            newmember
        });

    } catch (err) {

        res.send(err);
    }



});

// create client

app.post('/api/freelancer-ke/create-client', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const client = new Client({

            email: req.body.email,
            name: req.body.clientname,
            mobile: req.body.clientmobile

        });

        const newclient = await client.save();

        console.log("new" + newclient)

        res.status(200).json({
            title: 'created',
            newclient
        });

    } catch (err) {

        res.send(err);
    }



});

// create project

app.post('/api/freelancer-ke/create-project', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const project = new Projects({

            title: req.body.title,
            client: req.body.client,
            budget: req.body.budget,
            targets:req.body.target,
            targetsMet:req.body.targetsMet,
            targetsPercentage:req.body.targetsPercentage,
            description: req.body.description

        });

        const newproject = await project.save();

        console.log("new" + newproject)

        res.status(200).json({
            title: 'created',
            newproject
        });

    } catch (err) {

        res.send(err);
    }



});

// create tasks

app.post('/api/freelancer-ke/create-task', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const tasks = new Tasks({

            title: req.body.title,
            project: req.body.project,
            members: req.body.members,
            duedate: new Date(),
            urgency: req.body.urgency,
            completed: new Date(),
            completedOnTime: req.body.completedOnTime

        });

        const newtasks = await tasks.save();

        console.log("new" + newtasks)

        res.status(200).json({
            title: 'created',
            newtasks
        });

    } catch (err) {

        res.send(err);
    }



});

// create business lead

app.post('/api/freelancer-ke/create-lead', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const lead = new Leads({

            email: req.body.email,
            name: req.body.name,
            companyName: req.body.companyName,
            natureOfBusiness: req.body.natureOfBusiness,
            mobile: req.body.mobile,
            leadLevel: req.body.level

        });

        const newlead = await lead.save();

        console.log("new" + newlead)

        res.status(200).json({
            title: 'created',
            newlead
        });

    } catch (err) {

        res.send(err);
    }



});

// create proposal

app.post('/api/freelancer-ke/create-proposal', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const proposal = new Proposals({

            title: req.body.title,
            lead: req.body.lead,
            bodyText: req.body.bodyText

        });

        const newproposal = await proposal.save();

        console.log("new" + newproposal)

        res.status(200).json({
            title: 'created',
            newproposal
        });

    } catch (err) {

        res.send(err);
    }



});

// calendar events

app.post('/api/freelancer-ke/create-event', async (req, res) => {

    console.log(req.body)

    try {
        //New Client Created
        const events = new Events({

            title: req.body.title,
            eventType: req.body.lead,
            memberAttached: req.body.bodyText,
            membersAttached:req.body.membersAttached,
            startdate: new Date(),
            enddate: new Date(),
            urgency: req.body.urgency

        });

        const newevent = await events.save();

        console.log("new" + newevent)

        res.status(200).json({
            title: 'created',
            newevent
        });

    } catch (err) {

        res.send(err);
    }



});

// create invoice

app.post('/api/freelancer-ke/create-invoice', async (req, res) => {

    console.log(req.body)

    try {
        //New invoice Created
        const invoice = new Invoices({

            client: req.body.client,
            cost: req.body.cost,
            project: req.body.project,
            filePath:req.body.filePath,
            fileName: req.body.fileName

        });

        console.log(invoice)

        const newinvoice = await invoice.save();

        console.log("new" + newinvoice)

        res.status(200).json({
            title: 'created',
            newinvoice
        });

    } catch (err) {

        res.send(err);
    }



});

// create receipts

app.post('/api/freelancer-ke/create-receipt', async (req, res) => {

    console.log(req.body)

    try {
        //New invoice Created
        const receipt = new Receipts({

            client: req.body.client,
            amount: req.body.amount,
            description: req.body.description,
            filePath:req.body.filePath,
            fileName: req.body.fileName

        });

        const newreceipt = await receipt.save();

        console.log("new" + newreceipt)

        res.status(200).json({
            title: 'created',
            newreceipt
        });

    } catch (err) {

        res.send(err);
    }



});

// Setting CRM Default Settings using Postman

app.post('/api/freelancer-ke/default-settings', async (req,res) => {

    console.log(req.body)

    

});




console.log(`Server is listening on port: ${server.address().port}`)