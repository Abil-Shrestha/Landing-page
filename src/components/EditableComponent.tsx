
import React, { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";

interface EditableComponentProps {
  children: ReactNode;
  componentName: string;
  onUpdate: (newContent: ReactNode) => void;
}

const EditableComponent = ({ children, componentName, onUpdate }: EditableComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    
    // Simulate LLM processing (in a real app, this would be an API call to your LLM service)
    try {
      // This is where you'd integrate with your actual LLM service
      console.log("Processing prompt:", prompt);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing time
      
      // For demonstration, we'll just update with a placeholder response
      // In a real implementation, this would be the LLM's response
      
      // This is just a placeholder example - in a real app, 
      // you'd replace this with actual content from your LLM
      if (componentName === "heading") {
        onUpdate(<>
          <span className="block">
            {prompt.slice(0, 15)}
          </span>
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {prompt.slice(15)}
          </span>
        </>);
      } else {
        onUpdate(<>{prompt}</>);
      }
      
      setIsDialogOpen(false);
      setPrompt("");
    } catch (error) {
      console.error("Error processing prompt:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 border-2 border-dashed border-indigo-500 bg-indigo-100/20 flex items-center justify-center rounded-lg z-10">
          <Button 
            variant="outline" 
            className="bg-white/90 hover:bg-white" 
            onClick={() => setIsDialogOpen(true)}
          >
            <Wand2 className="mr-2 h-4 w-4" />
            Edit {componentName}
          </Button>
        </div>
      )}
      
      <div className={isHovered ? "opacity-40" : ""}>
        {children}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit {componentName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              Describe how you'd like to change this component.
            </p>
            <Textarea
              placeholder={`Example: Change the ${componentName} to be more energetic and vibrant`}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <div className="flex justify-end">
              <Button onClick={handlePromptSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditableComponent;
