import skillModel from '../models/skillModel.js';

export const getSkill = async (req, res) => {
  try {
    const skills = await skillModel.find();
    res.status(200).send(skills);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createSkill = async (req, res) => {
  try {
    const { skillTitle, image } = req.body;

    const newSkill = new skillModel({
      skillTitle,
      image,
    });

    const savedSkill = await newSkill.save();
    res.status(201).send(savedSkill);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateSkill = async (req, res) => {
  try {
    const skillId = req.params.id;
    const { skillTitle, image } = req.body;

    const existingSkill = await skillModel.findById(skillId);
    if (!existingSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    existingSkill.skillTitle = skillTitle;

    existingSkill.image = image;

    const updatedSkill = await existingSkill.save();
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.id;

    console.log('Deleting Skill with ID:', skillId);

    const existingSkill = await skillModel.findByIdAndDelete(skillId);
    if (!existingSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting Skill:', error);
    res.status(500).send(error.message);
  }
};
