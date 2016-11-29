//
//  ViewController.swift
//  Status
//
//  Created by James Martinez on 6/8/15.
//  Copyright (c) 2015 James Martinez. All rights reserved.
//

import UIKit
import Parse

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

  @IBOutlet weak var tableView: UITableView!
  var updates = [NSObject]()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    tableView.dataSource = self
    tableView.delegate = self
 
    
    //create PFQuery
    var query = PFQuery(className: "User")query.whereKey("username", equalTo: "rob")query.findObjectsInBackgroundWithBlock { (objects, error) -> Void in
    
        if objects?.count > 0 {
            
        }
        else {
            var user = PFObject(className: "User")user["username"] = "User")
            user["username"] = "james"
            user.saveToBsckgroundWidthBlock(nil)
        }
        }
    }

  // MARK: - UITableViewDataSource

  func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return updates.count
  }

  func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
    // TODO: Make this cell reuseable
    var cell = NSBundle.mainBundle().loadNibNamed("UpdateTableViewCell", owner: self, options: nil).first as! UpdateTableViewCell
    var update = updates[indexPath.row]
    // TODO: add this back using Parse
//    cell.updateTextLabel?.text = update.text
//
//    let user = update.user
//    cell.handleLabel.text = user.username
//    cell.nameLabel.text = user.name
    return cell
  }

  // MARK: - UITableViewDelegate

  func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
    return 130
  }
}

