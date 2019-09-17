var express = require('express');
var router = express.Router();

var project = require('../models/project');

router.post('/', function (req, res) {

    var tempProject = {
        projectName: req.body.projectName,
        likes: req.body.likes
    };
    console.log(tempProject);
    let newProject = new project(tempProject);
    newProject.save()
        .then(data => {
            if (data.length < 1) {
                return res.status(200).json({
                    message: "Project created successfully"
                });
            }
            else {
                return res.status(400).json({
                    message: "Project creation failed",
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        })
});

router.get('/', function (req, res) {

    project.find({})
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        })
});

router.put('/:projectName/likes/:likeCount', function (req, res) {
    var projectName = req.params.projectName;
    var count = req.params.likeCount;
    console.log("here")
    console.log(projectName + " " + count)
    project.findOneAndUpdate({projectName: projectName}, {$set: {likes: count}}).then(data => {
        if (data.length < 1) {
            return res.status(200).json({
                message: "Project likes updated successfully"
            });
        }
        else {
            return res.status(400).json({
                message: "Project not found",
            });
        }
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    })
    res.send(projectName + " " + count);
});

module.exports = router;