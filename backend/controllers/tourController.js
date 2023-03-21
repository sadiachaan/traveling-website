import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully created",
      data: updateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: "Succefully Found",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Succefull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// //get featured tour
// export const getFeaturedTour = async (req, res) => {
//   try {
//     const tours = await Tour.find({ featured: true }).limit(8);
//     res.status(200).json({
//       success: true,
//       message: "Succefull",
//       data: tours,
//     });
//   } catch (error) {
//     res.status(404).json({
//       success: false,
//       message: "not found",
//     });
//   }
// };

// //get tour Counts
// export const getTourCount = async (req, res) => {
//   try {
//     const tourCount = await Tour.estimatedDocumentCount();
//     res.status(200).json({
//       success: true,
//       data: tourCount,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "failed to fetch",
//     });
//   }
// };

// //SearchTour
// export const getTourBySearch = async (req, res) => {
//   //here 'i' means case sensitive
//   const city = new RegExp(req.query.city, "i");
//   const distance = parseInt(req.query.distance);
//   const maxGroupSize = parseInt(req.query.maxGroupSize);

//   try {
//     //gte means geater then equal
//     const tours = await Tour.find({
//       city,
//       distance: { $gte: distance },
//       maxGroupSize: { $gte: maxGroupSize },
//     });
//     res.status(200).json({
//       success: true,
//       data: tours,
//     });
//   } catch (error) {
//     res.status(404).json({
//       success: false,
//       message: "not found ",
//     });
//   }
// };
