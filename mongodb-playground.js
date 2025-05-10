// MongoDB Playground
// Use Ctrl+Enter to run a query

// Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/lokally";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("lokally");
    
    // Test Queries
    
    // 1. Create a new user
    const createUser = async () => {
      const users = db.collection("users");
      const result = await users.insertOne({
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        address: "123 Test St",
        password: "hashedPassword123", // In real app, this would be hashed
        createdAt: new Date()
      });
      console.log("Created user:", result);
    };

    // 2. Create a new complaint
    const createComplaint = async (userId) => {
      const complaints = db.collection("complaints");
      const result = await complaints.insertOne({
        userId: userId,
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        address: "123 Test St",
        complaintType: "Water",
        description: "Water leakage in bathroom",
        priority: "Daily",
        status: "Pending",
        createdAt: new Date()
      });
      console.log("Created complaint:", result);
    };

    // 3. Get all complaints for a user
    const getUserComplaints = async (userId) => {
      const complaints = db.collection("complaints");
      const result = await complaints.find({ userId: userId }).toArray();
      console.log("User complaints:", result);
    };

    // 4. Update complaint status
    const updateComplaintStatus = async (complaintId, newStatus) => {
      const complaints = db.collection("complaints");
      const result = await complaints.updateOne(
        { _id: complaintId },
        { $set: { status: newStatus } }
      );
      console.log("Updated complaint:", result);
    };

    // 5. Get complaints by priority
    const getComplaintsByPriority = async (priority) => {
      const complaints = db.collection("complaints");
      const result = await complaints.find({ priority: priority }).toArray();
      console.log(`${priority} priority complaints:`, result);
    };

    // 6. Get complaints by status
    const getComplaintsByStatus = async (status) => {
      const complaints = db.collection("complaints");
      const result = await complaints.find({ status: status }).toArray();
      console.log(`${status} status complaints:`, result);
    };

    // 7. Delete a complaint
    const deleteComplaint = async (complaintId) => {
      const complaints = db.collection("complaints");
      const result = await complaints.deleteOne({ _id: complaintId });
      console.log("Deleted complaint:", result);
    };

    // 8. Get user profile
    const getUserProfile = async (userId) => {
      const users = db.collection("users");
      const result = await users.findOne({ _id: userId });
      console.log("User profile:", result);
    };

    // 9. Update user profile
    const updateUserProfile = async (userId, updates) => {
      const users = db.collection("users");
      const result = await users.updateOne(
        { _id: userId },
        { $set: updates }
      );
      console.log("Updated user profile:", result);
    };

    // 10. Get complaint statistics
    const getComplaintStats = async () => {
      const complaints = db.collection("complaints");
      const stats = await complaints.aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 }
          }
        }
      ]).toArray();
      console.log("Complaint statistics:", stats);
    };

    // Example usage:
    // await createUser();
    // await createComplaint("user123");
    // await getUserComplaints("user123");
    // await updateComplaintStatus("complaint123", "In Progress");
    // await getComplaintsByPriority("Daily");
    // await getComplaintsByStatus("Pending");
    // await deleteComplaint("complaint123");
    // await getUserProfile("user123");
    // await updateUserProfile("user123", { phone: "9876543210" });
    // await getComplaintStats();

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

run().catch(console.error);

// Helper function to convert string ID to ObjectId
function toObjectId(id) {
  const { ObjectId } = require('mongodb');
  return new ObjectId(id);
}

// Example queries to run in MongoDB shell:
/*
// Create indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.complaints.createIndex({ userId: 1 });
db.complaints.createIndex({ status: 1 });
db.complaints.createIndex({ priority: 1 });
db.complaints.createIndex({ createdAt: -1 });

// Find all pending complaints
db.complaints.find({ status: "Pending" });

// Find complaints by date range
db.complaints.find({
  createdAt: {
    $gte: new Date("2024-01-01"),
    $lte: new Date("2024-12-31")
  }
});

// Count complaints by type
db.complaints.aggregate([
  {
    $group: {
      _id: "$complaintType",
      count: { $sum: 1 }
    }
  }
]);

// Find users with most complaints
db.complaints.aggregate([
  {
    $group: {
      _id: "$userId",
      complaintCount: { $sum: 1 }
    }
  },
  {
    $sort: { complaintCount: -1 }
  },
  {
    $limit: 10
  }
]);
*/ 