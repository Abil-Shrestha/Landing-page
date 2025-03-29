
import React, { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem("claudeApiKey") || "";
  });
  const [showApiKeyInput, setShowApiKeyInput] = useState(!localStorage.getItem("claudeApiKey"));
  const { toast } = useToast();

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("claudeApiKey", apiKey);
      setShowApiKeyInput(false);
      toast({
        title: "API Key Saved",
        description: "Your Claude API key has been saved to local storage.",
      });
    }
  };

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) return;
    
    if (!apiKey) {
      setShowApiKeyInput(true);
      toast({
        title: "API Key Required",
        description: "Please enter your Claude API key to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log("Starting API request to Claude...");
      
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `You are a UI content generator. I need you to update the content for a ${componentName} component based on this prompt: "${prompt}". 
              
              If this is a heading, respond with only HTML that can be used directly in a React component, e.g. <span>New heading</span>.
              
              If this is not a heading (like description or button text), respond with just the plain text without any formatting or quotes.
              
              Be concise and match the style of a professional landing page. DO NOT include any explanations, just provide the content.`
            }
          ]
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: "Unknown error" } }));
        console.error("Claude API error:", errorData);
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Claude API response:", data);
      
      const generatedContent = data.content[0].text;
      
      if (componentName === "heading") {
        // For headings, we expect HTML that we can convert to React elements
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = generatedContent.trim();
        
        // Create a React fragment with the heading content
        const headingContent = (
          <>
            {generatedContent.includes('<span') ? 
              generatedContent : 
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {generatedContent}
              </span>
            }
          </>
        );
        onUpdate(headingContent);
      } else {
        // For other components, just use the text directly
        onUpdate(generatedContent.trim());
      }
      
      setIsDialogOpen(false);
      setPrompt("");
      
      toast({
        title: "Content Updated",
        description: `The ${componentName} has been updated successfully.`,
      });
    } catch (error) {
      console.error("Error processing prompt:", error);
      
      // More descriptive error message based on the error
      let errorMessage = "";
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        errorMessage = "Network error: Could not connect to Claude API. This is likely due to CORS restrictions when calling the API directly from your browser. Consider using a backend proxy or API route.";
      } else {
        errorMessage = error instanceof Error ? error.message : "Failed to generate content. Please try again.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
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
            <DialogDescription>
              Describe how you'd like to change this component.
            </DialogDescription>
          </DialogHeader>
          {showApiKeyInput ? (
            <div className="space-y-4 py-4">
              <p className="text-sm text-muted-foreground">
                Enter your Claude API key. This will be saved in your browser's localStorage.
              </p>
              <div className="flex items-start gap-2">
                <Textarea
                  placeholder="sk-ant-api03-..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="resize-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-amber-600 flex items-center">
                  <Info className="h-3 w-3 mr-1" />
                  Note: Direct browser API calls may face CORS issues
                </div>
                <Button onClick={saveApiKey}>
                  Save API Key
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <Textarea
                placeholder={`Example: Change the ${componentName} to be more energetic and vibrant`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="resize-none"
              />
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setShowApiKeyInput(true)}>
                  Change API Key
                </Button>
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditableComponent;
