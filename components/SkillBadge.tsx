import React from 'react';
import { 
  Code, 
  Cpu, 
  Zap, 
  Brain, 
  Layers, 
  Database, 
  Globe, 
  Smartphone,
  Settings,
  Lock,
  BarChart3,
  GitBranch,
  Palette
} from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  icon: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon }) => {
  // Mapping icon names to Lucide React components
  const getIconComponent = () => {
    switch(icon.toLowerCase()) {
      case 'python':
        return <Code className="w-6 h-6 text-blue-500" />;
      case 'typescript':
      case 'javascript':
        return <Zap className="w-6 h-6 text-yellow-500" />;
      case 'architecture':
      case 'system architecture':
        return <Layers className="w-6 h-6 text-green-500" />;
      case 'algorithm':
      case 'algorithms':
        return <Settings className="w-6 h-6 text-purple-500" />;
      case 'ml':
      case 'machine learning':
        return <Brain className="w-6 h-6 text-cyan-500" />;
      case 'nlp':
      case 'natural language processing':
        return <Globe className="w-6 h-6 text-indigo-500" />;
      case 'llm':
      case 'large language models':
        return <Brain className="w-6 h-6 text-violet-500" />;
      case 'neural':
      case 'neural networks':
        return <Cpu className="w-6 h-6 text-pink-500" />;
      case 'react':
        return <Smartphone className="w-6 h-6 text-cyan-600" />;
      case 'nextjs':
        return <Globe className="w-6 h-6 text-gray-800" />;
      case 'tailwind':
      case 'tailwind css':
        return <Palette className="w-6 h-6 text-teal-500" />;
      case 'motion':
      case 'framer motion':
        return <Zap className="w-6 h-6 text-orange-500" />;
      case 'database':
        return <Database className="w-6 h-6 text-emerald-500" />;
      case 'security':
      case 'lock':
        return <Lock className="w-6 h-6 text-red-500" />;
      case 'analytics':
      case 'bar chart':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'git':
      case 'version control':
        return <GitBranch className="w-6 h-6 text-orange-600" />;
      default:
        return <Code className="w-6 h-6 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center transition-all duration-300 hover:shadow-md hover:border-blue-200 flex flex-col items-center">
      <div className="mb-3 flex justify-center">
        {getIconComponent()}
      </div>
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;