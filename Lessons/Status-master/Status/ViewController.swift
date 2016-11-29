//
//  ViewController.swift
//  Status
//
//  Created by James Martinez on 6/8/15.
//  Copyright (c) 2015 James Martinez. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, NSURLConnectionDataDelegate {

  @IBOutlet weak var tableView: UITableView!
  var updates = [Update]()
  
  override func viewDidLoad() {
    super.viewDidLoad()

    tableView.dataSource = self
    tableView.delegate = self

    let urlString = "https://rawgit.com/jamescmartinez/Status/master/updates.json"
    let url = NSURL(string: urlString)
    let request = NSURLRequest(URL: url!)
    let connection = NSURLConnection(request: request, delegate: self, startImmediately: true)
  }

  // MARK: - UITableViewDataSource

  func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return updates.count
  }

  func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
    // TODO: Make this cell reuseable
    var cell = NSBundle.mainBundle().loadNibNamed("UpdateTableViewCell", owner: self, options: nil).first as! UpdateTableViewCell
    var update = updates[indexPath.row]
    cell.updateTextLabel?.text = update.text

    if let user = update.user {
      cell.handleLabel.text = user.username
      cell.nameLabel.text = user.name
    }
    return cell
  }

  // MARK: - UITableViewDelegate

  func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
    return 130
  }

  // MARK: - NSURLConnectionDataDelegate

  func connection(connection: NSURLConnection, didReceiveData data: NSData) {
    let jsonObject = NSJSONSerialization.JSONObjectWithData(data, options: nil, error: nil) as! NSArray

    for var i = 0; i < jsonObject.count; i++ {
      let updateJSON = jsonObject[i] as! [String: AnyObject]
      let text = updateJSON["text"] as! String
      let date = updateJSON["date"] as! Int
      let userJSON = updateJSON["user"] as! [String: AnyObject]
      let link = userJSON["link"] as! String
      let name = userJSON["name"] as! String
      let username = userJSON["username"] as! String
      let city = userJSON["city"] as! String
      let bio = userJSON["bio"] as! String

      var update = Update()
      update.text = text
      // TODO: convert date integer to NSDate

      var user = User()
      user.name = name
      user.username = username
      user.city = city
      user.bio = bio
      user.link = link

      update.user = user

      updates.append(update)
    }
    tableView.reloadData()
  }
}

